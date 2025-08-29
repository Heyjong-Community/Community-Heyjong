import { NewArticlePayload } from '@/types/article';

export async function GetAllArticles(page: number, limit: number) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/article/all?page=${page}&limit=${limit}`);
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Failed to fetch');
    }

    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error((error as Error).message || 'Network error');
  }
}

export async function GetArticleById(id: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/article/${id}`);
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Failed to fetch');
    }

    const data = await res.json();

    return data.data;
  } catch (error) {
    throw new Error((error as Error).message || 'Network error');
  }
}

export async function GetArticleBySlug(slug: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/article/detail/${slug}`);
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Failed to fetch');
    }

    const data = await res.json();

    return data.data;
  } catch (error) {
    throw new Error((error as Error).message || 'Network error');
  }
}

export async function addNewArticle(payload: NewArticlePayload) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/article/add`, {
      method: 'POST',
      // headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(payload),
    });

    if (res.status === 401) {
      throw new Error('Unauthorized');
    }
    const data = await res.json();

    if (!res.ok) {
      // const errorData = await res.json();
      throw new Error(data.message || 'Failed to add data');
    }

    return data.data;
  } catch (error) {
    throw new Error((error as Error).message || 'Network error');
  }
}
