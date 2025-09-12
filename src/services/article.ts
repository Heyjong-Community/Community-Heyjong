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
    const formData = new FormData();
    formData.append('title', payload.title);
    formData.append('slug', payload.slug);
    formData.append('content', payload.content);
    formData.append('category_id', payload.category_id);
    if (payload.thumbnail) {
      formData.append('thumbnail', payload.thumbnail); // nama harus sama dengan multer.single('thumbnail')
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/article/add`, {
      method: 'POST',
      // headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      // body: JSON.stringify(payload),
      body: formData,
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

    console.log('ini form = ', formData);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/article/edit/${id}`, {
      method: 'PUT',
      credentials: 'include',
      body: formData,
    });

    console.log('res = ', res);

    if (res.status === 401) {
      throw new Error('Unauthorized');
    }
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || 'Failed to add data');
    }

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

    if (res.status === 401) {
      throw new Error('Unauthorized');
    }
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || 'Failed to publish');
    }

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

    if (res.status === 401) {
      throw new Error('Unauthorized');
    }
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || 'Failed to publish');
    }

    return data.data;
  } catch (error) {
    throw new Error((error as Error).message || 'Network error');
  }
}
