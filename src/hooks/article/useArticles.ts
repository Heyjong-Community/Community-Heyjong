import { addNewArticle, GetAllArticles } from '@/services/article';
import { Article, NewArticlePayload } from '@/types/article';
import { Pagination } from '@/types/pagination';
import { useCallback, useState } from 'react';

export function useArticles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState<Pagination | null>(null);

  const fetchArticles = useCallback(async (page: number = 1, limit: number = 10) => {
    setLoading(true);
    setError(null);

    try {
      const data = await GetAllArticles(page, limit);
      setArticles(data.data);
      setPagination(data.pagination);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  const addArticle = async (data: NewArticlePayload) => {
    try {
      const newArticle = await addNewArticle(data);
      console.log('res', newArticle);
      setArticles((prev) => [...prev, newArticle]);
      return newArticle;
    } catch (err) {
      setError((err as Error).message);
      throw err;
    }
  };

  return { articles, loading, error, fetchArticles, pagination, addArticle };
}
