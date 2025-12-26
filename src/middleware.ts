import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const accessToken = request.cookies.get('accessToken')?.value || request.cookies.get('session')?.value;
  const refreshToken = request.cookies.get('refreshToken')?.value;

  const isAuthPage = pathname.startsWith('/login');
  const isProtected = pathname.startsWith('/dashboard');

  // jika sudah login dan akses halaman login, akan diarahkan ke dashboard
  if (accessToken && isAuthPage) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // jika sudah login
  if (!isProtected) return NextResponse.next();

  if (!accessToken) {
    // jika tidak ada accessToken dan tidak ada refresh token, akan diarahkan ke halaman login
    if (!refreshToken) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    // jika tidak ada accessToken saja
    try {
      // buat refreshToken baru
      const refreshRes = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/user/refresh`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          cookie: request.headers.get('cookie') || '',
        },
      });

      // Jika refresh gagal → login
      if (!refreshRes.ok) {
        return NextResponse.redirect(new URL('/login', request.url));
      }

      // Jika refresh sukses, izinkan lanjut
      return NextResponse.next();
    } catch {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/login'],
};
