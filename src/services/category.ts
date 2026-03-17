import { handleResponse } from '@/helpers/response';

export async function getAllCategories(page: number, limit: number) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/category/all?page=${page}&limit=${limit}`);

    const data = await handleResponse(res, 'Gagal ambil data');

    return data;
  } catch (error) {
    throw new Error((error as Error).message || 'Network error');
  }
}

export async function getCategoryById(id: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/category/${id}`);

    const data = await handleResponse(res, 'Gagal ambil data');

    return data.data;
  } catch (error) {
    throw new Error((error as Error).message || 'Network error');
  }
}

export async function addNewCategory(name: string, slug: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/category/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ name, slug }),
    });

    const data = await handleResponse(res, 'Gagal tambah data');
    return data.data;
  } catch (error) {
    throw new Error((error as Error).message || 'Network error');
  }
}

export async function updateCategory(id: string, name: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/category/edit/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ name }),
    });

    const data = await handleResponse(res, 'Gagal update data');

    return data.data;
    // return res.json();
  } catch (error) {
    throw new Error((error as Error).message || 'Network error');
  }
}

export async function deleteCategory(id: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/category/delete/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    });

    const data = await handleResponse(res, 'Gagal hapus data');

    return data.data;
    // return res.json();
  } catch (error) {
    throw new Error((error as Error).message || 'Network error');
  }
}
