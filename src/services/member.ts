import { handleResponse } from '@/helpers/response';
import { FormMember } from '@/types/member';

export async function GetAllMembers(page: number, limit: number) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/member/all?page=${page}&limit=${limit}`);
    const data = await handleResponse(res, 'Gagal ambil data');

    return data;
  } catch (error) {
    throw new Error((error as Error).message || 'Network error');
  }
}

export async function GetMemberById(id: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/member/${id}`);
    const data = await handleResponse(res, 'Gagal ambil data');

    return data.data;
  } catch (error) {
    throw new Error((error as Error).message || 'Network error');
  }
}

export async function AddNewMember(payload: FormMember) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/member/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(payload),
    });

    const data = await handleResponse(res, 'Gagal tambah data');
    return data.data;
  } catch (error) {
    throw new Error((error as Error).message || 'Network error');
  }
}

export async function UpdateMember(id: string, payload: FormMember) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/member/edit/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(payload),
    });

    const data = await handleResponse(res, 'Gagal tambah data');
    return data.data;
  } catch (error) {
    throw new Error((error as Error).message || 'Network error');
  }
}

export async function DeleteMember(id: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/member/delete/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    });

    const data = await handleResponse(res, 'Gagal tambah data');
    return data.data;
  } catch (error) {
    throw new Error((error as Error).message || 'Network error');
  }
}
