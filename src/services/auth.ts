import { handleResponse } from '@/helpers/response';
import { LoginRequest } from '@/types/auth';

export async function loginService(data: LoginRequest) {
  // try {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/user/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(data),
  });

  return handleResponse(res, 'Login gagal');
}

export async function logoutService() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/user/logout`, {
    method: 'POST',
    credentials: 'include',
  });

  return handleResponse(res, 'Logout gagal');
}

export async function getProfile() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/user/profile`, {
    method: 'GET',
    credentials: 'include',
  });

  const data = await handleResponse(res, 'Gagal ambil profil');
  return data.data;
}
