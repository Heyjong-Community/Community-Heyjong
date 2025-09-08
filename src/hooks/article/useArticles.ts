import {
  addNewArticle,
  GetAllArticles,
  GetArticleById,
  publishArticleService,
  unPublishArticleService,
  updateArticleService,
} from '@/services/article';
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

  const getArticleById = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);

    try {
      const article = await GetArticleById(id);
      return article;
    } catch (error) {
      setError((error as Error).message);
      throw error;
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

  const updateArticle = async (id: string, data: NewArticlePayload) => {
    try {
      const updated = await updateArticleService(id, data);
      console.log('updated', updated);
      setArticles((prev) => prev.map((article) => (article.id === id ? updated : article)));
      return updated;
    } catch (error) {
      setError((error as Error).message);
      throw error;
    }
  };

  const publishArticle = async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      const published = await publishArticleService(id);
      // console.log('updated', updated);
      // setArticles((prev) => prev.map((article) => (article.id === id ? updated : article)));
      return published;
    } catch (error) {
      setError((error as Error).message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const unPublishArticle = async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      const unpublished = await unPublishArticleService(id);
      // console.log('updated', updated);
      // setArticles((prev) => prev.map((article) => (article.id === id ? updated : article)));
      return unpublished;
    } catch (error) {
      setError((error as Error).message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    articles,
    loading,
    error,
    fetchArticles,
    pagination,
    getArticleById,
    addArticle,
    updateArticle,
    publishArticle,
    unPublishArticle,
  };
}
