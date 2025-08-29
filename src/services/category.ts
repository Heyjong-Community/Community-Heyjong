export async function getAllCategories(page: number, limit: number) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/category/all?page=${page}&limit=${limit}`);
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

export async function getCategoryById(id: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/category/${id}`);
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

export async function addNewCategory(name: string, slug: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/category/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ name, slug }),
    });

    if (res.status === 401) {
      throw new Error('Unauthorized');
    }

    const data = await res.json();

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Failed to add data');
    }

    return data.data;
    // return res.json();
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

    if (res.status === 401) {
      throw new Error('Unauthorized');
    }

    const data = await res.json();

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Failed to update');
    }

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

    if (res.status === 401) {
      throw new Error('Unauthorized');
    }

    const data = await res.json();

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Failed to delete');
    }

    return data.data;
    // return res.json();
  } catch (error) {
    throw new Error((error as Error).message || 'Network error');
  }
}
