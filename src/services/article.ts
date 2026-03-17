import { handleResponse } from '@/helpers/response';
import { NewArticlePayload } from '@/types/article';

export async function GetAllArticles(page: number, limit: number) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/article/all?page=${page}&limit=${limit}`);
    const data = await handleResponse(res, 'Gagal ambil data');

    return data;
  } catch (error) {
    throw new Error((error as Error).message || 'Network error');
  }
}

export async function GetArticleById(id: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/article/${id}`);
    const data = await handleResponse(res, 'Gagal ambil data');

    return data.data;
  } catch (error) {
    throw new Error((error as Error).message || 'Network error');
  }
}

export async function GetArticleBySlug(slug: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/article/detail/${slug}`);
    const data = await handleResponse(res, 'Gagal ambil data');

    return data.data;
  } catch (error) {
    throw new Error((error as Error).message || 'Network error');
  }
}

export async function addNewArticle(payload: NewArticlePayload) {
  try {
    const formData = new FormData();
    formData.append('title', payload.title);
    formData.append('slug', payload.slug);
    formData.append('content', payload.content);
    formData.append('category_id', payload.category_id);

    if (payload.thumbnail instanceof File) {
      formData.append('thumbnail', payload.thumbnail);
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/article/add`, {
      method: 'POST',
      credentials: 'include',
      body: formData,
    });

    const data = await handleResponse(res, 'Gagal tambah data');
    return data.data;
  } catch (error) {
    throw new Error((error as Error).message || 'Network error');
  }
}

export async function updateArticleService(id: string, payload: NewArticlePayload) {
  try {
    const formData = new FormData();
    formData.append('title', payload.title);
    formData.append('slug', payload.slug);
    formData.append('content', payload.content);
    formData.append('category_id', payload.category_id);
    if (payload.thumbnail) {
      formData.append('thumbnail', payload.thumbnail);
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/article/edit/${id}`, {
      method: 'PUT',
      credentials: 'include',
      body: formData,
    });

    const data = await handleResponse(res, 'Gagal update data');

    return data.data;
  } catch (error) {
    throw new Error((error as Error).message || 'Network error');
  }
}

export async function publishArticleService(id: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/article/publish/${id}`, {
      method: 'PUT',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        published: true,
        published_date: new Date().toISOString(),
      }),
    });

    const data = await handleResponse(res, 'Gagal publish');

    return data.data;
  } catch (error) {
    throw new Error((error as Error).message || 'Network error');
  }
}

export async function unPublishArticleService(id: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/article/unpublish/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ published: false, published_date: null }),
    });

    const data = await handleResponse(res, 'Gagal unpublish');

    return data.data;
  } catch (error) {
    throw new Error((error as Error).message || 'Network error');
  }
}

export async function deleteArticle(id: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/article/delete/${id}`, {
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
