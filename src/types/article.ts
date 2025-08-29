import { User } from './auth';
import { Category } from './category';

export interface NewArticlePayload {
  title: string;
  slug: string;
  category_id: string;
  thumbnail?: File | null;
  content: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  author_id: string;
  category_id: string;
  thumbnail?: File;
  users: User;
  categories: Category;
  published_date: string;
}
