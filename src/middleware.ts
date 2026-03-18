import { NextRequest, NextResponse } from 'next/server';
import { type Role, getRequiredRole, hasAccess } from '@/lib/rbac';

function decodeJWT(token: string): Record<string, unknown> | null {
  try {
    const base64Payload = token.split('.')[1];
    if (!base64Payload) return null;
    const decoded = atob(base64Payload.replace(/-/g, '+').replace(/_/g, '/'));
    return JSON.parse(decoded);
  } catch {
    return null;
  }
}

function getUserRole(token: string): Role | null {
  const payload = decodeJWT(token);
  if (!payload) return null;
  return (payload.role as Role) ?? null; // ⚠️ sesuaikan key dengan struktur JWT kamu
}

async function tryRefreshToken(request: NextRequest): Promise<string | null> {
  try {
    const refreshRes = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/user/refresh`, {
      method: 'GET',
      credentials: 'include',
      headers: { cookie: request.headers.get('cookie') || '' },
    });
    if (!refreshRes.ok) return null;

    const data = await refreshRes.json();
    return data.accessToken ?? null; // ⚠️ sesuaikan key response API kamu
  } catch {
    return null;
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  let accessToken = request.cookies.get('accessToken')?.value || request.cookies.get('session')?.value;
  const refreshToken = request.cookies.get('refreshToken')?.value;

  const isAuthPage = pathname.startsWith('/login');
  const requiredRole = getRequiredRole(pathname);

  // Jika sudah login dan akses halaman login → redirect ke dashboard
  if (accessToken && isAuthPage) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // Jika route tidak butuh role khusus → lanjut
  if (!requiredRole) return NextResponse.next();

  // Tidak ada token sama sekali → ke login
  if (!accessToken && !refreshToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Tidak ada accessToken tapi ada refreshToken → coba refresh
  if (!accessToken && refreshToken) {
    const newToken = await tryRefreshToken(request);
    if (!newToken) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    accessToken = newToken;
  }

  // Cek role dari accessToken
  const userRole = getUserRole(accessToken!);

  if (!userRole) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (!hasAccess(userRole, requiredRole)) {
    return NextResponse.redirect(new URL('/unauthorized', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/staff/:path*', '/admin/:path*', '/access-user/:path*', '/login'],
};
