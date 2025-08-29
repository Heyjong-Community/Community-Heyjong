import { LoginRequest } from '@/types/auth';

export async function loginService(data: LoginRequest) {
  // try {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/user/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || 'Login failed');
  }

  return res.json();
  // } catch (error) {
  //   throw new Error(`failed login: ${error instanceof Error ? error.message : String(error)}`);
  // }
}

export async function logoutService() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/user/logout`, {
    method: 'POST',
    credentials: 'include',
  });

  if (!res.ok) {
    throw new Error('Logout gagal');
  }
  return res.json();
}

export async function getProfile() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/user/profile`, {
    method: 'GET',
    credentials: 'include',
  });

  if (!res.ok) {
    throw new Error('Logout gagal');
  }
  return res.json();
}
