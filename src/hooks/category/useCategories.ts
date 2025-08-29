import { addNewCategory, deleteCategory, getAllCategories, updateCategory } from '@/services/category';
import { Category } from '@/types/category';
import { Pagination } from '@/types/pagination';
import { useCallback, useState } from 'react';

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState<Pagination | null>(null);

  const fetchCategories = useCallback(async (page: number = 1, limit: number = 10) => {
    setLoading(true);
    setError(null);

    try {
      const data = await getAllCategories(page, limit);
      setCategories(data.data);
      setPagination(data.pagination);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  const addCategory = async (name: string, slug: string) => {
    try {
      const newCategory = await addNewCategory(name, slug);
      setCategories((prev) => [...prev, newCategory]);
      return newCategory;
    } catch (err) {
      setError((err as Error).message);
      throw err;
    }
  };

  const editCategory = async (id: string, name: string) => {
    try {
      const updated = await updateCategory(id, name);
      setCategories((prev) => prev.map((cat) => (cat.id === id ? updated : cat)));
    } catch (err) {
      setError((err as Error).message);
    }
  };

  const removeCategory = async (id: string) => {
    try {
      await deleteCategory(id);
      console.log('Deleted category with id =', id);
      // await fetchCategories();
      setCategories((prev) => prev.filter((cat) => cat.id !== id));
      console.log('After fetch, categories =', categories);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return {
    categories,
    loading,
    error,
    fetchCategories,
    addCategory,
    editCategory,
    removeCategory,
    pagination,
  };
}
