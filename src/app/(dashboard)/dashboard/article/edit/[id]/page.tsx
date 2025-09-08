'use client';

import RichTextEditorForm from '@/components/organism/RichTextEditor';
import { Button } from '@/components/ui/button';
import { useArticles } from '@/hooks/article/useArticles';
import { useCategories } from '@/hooks/category/useCategories';
import { NewArticlePayload } from '@/types/article';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { toast } from 'sonner';

export default function EditArticlePage() {
  const router = useRouter();
  const params = useParams();
  const baseUrl = 'http://localhost:5000';

  const { id } = params;
  const { categories, fetchCategories } = useCategories();
  const { loading, getArticleById, updateArticle, publishArticle, unPublishArticle } = useArticles();

  const [formData, setFormData] = useState<NewArticlePayload>({
    title: '',
    slug: '',
    category_id: '',
    thumbnail: null,
    content: '',
  });
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [isPublished, setIsPublished] = useState<boolean>(false);

  useEffect(() => {
    fetchCategories();

    const fetchArticle = async () => {
      try {
        const article = await getArticleById(id as string);
        console.log('data artikel = ', article);
        setFormData({
          title: article.title,
          slug: article.slug,
          category_id: article.category_id,
          thumbnail: null,
          content: article.content,
        });

        if (article.thumbnail) {
          setThumbnailPreview(`${baseUrl}${article.thumbnail}`);
        }

        setIsPublished(article.published);
      } catch (error) {
        toast.error((error as Error).message || 'Gagal mengambil data artikel');
      }
    };

    if (id) fetchArticle();
  }, [id, fetchCategories, getArticleById]);

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      if (name === 'title') {
        return {
          ...prev,
          title: value,
          slug: generateSlug(value),
        };
      }

      return { ...prev, [name]: value };
    });
  };

  const handleEditorChange = (value: string) => {
    setFormData((prev) => ({ ...prev, content: value }));
  };

  const handleThumbnailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      setFormData((prev) => ({ ...prev, thumbnail: null }));
      setThumbnailPreview(null);
      return;
    }

    if (!file.type.startsWith('image/')) {
      toast.error('File harus berupa gambar');
      e.target.value = '';
      return;
    }

    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      toast.error('Ukuran file maksimal 5MB');
      e.target.value = '';
      return;
    }

    console.log('File yang dipilih:', {
      name: file.name,
      size: file.size,
      type: file.type,
    });

    setFormData((prev) => ({ ...prev, thumbnail: file }));

    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setThumbnailPreview(event.target.result as string);
      }
    };
    reader.onerror = () => {
      console.error('Error reading file');
      toast.error('Gagal membaca file');
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append('title', formData.title);
      data.append('slug', formData.slug);
      data.append('category_id', formData.category_id);
      data.append('content', formData.content);

      if (formData.thumbnail) {
        data.append('thumbnail', formData.thumbnail);
      }
      console.log('isi form datanya = ', formData);
      await updateArticle(id as string, formData);
      toast.success('Artikel berhasil diperbarui');
      router.push('/dashboard/article');
    } catch (error) {
      toast.error((error as Error).message || 'Gagal update artikel');
    }
  };

  const handlePublishArticle = async () => {
    if (isPublished) {
      toast.info('Artikel sudah dipublikasi.');
      return;
    }

    try {
      const result = await publishArticle(id as string);
      if (result) {
        setIsPublished(true);
        toast.success('Artikel berhasil dipublikasi!');
      }

      setTimeout(() => {
        router.push('/dashboard/article');
      }, 2000);
    } catch (error) {
      toast.error((error as Error).message || 'Gagal mempublikasi artikel.');
    }
  };

  const handleUnpublishArticle = async () => {
    if (!isPublished) {
      toast.info('Artikel belum dipublikasi.');
      return;
    }

    try {
      const result = await unPublishArticle(id as string);
      if (result) {
        setIsPublished(true);
        toast.success('Artikel berhasil di un-publish!');
      }

      setTimeout(() => {
        router.push('/dashboard/article');
      }, 2000);
    } catch (error) {
      toast.error((error as Error).message || 'Gagal un-publish artikel.');
    }
  };

  return (
    <div className='p-5'>
      <div className='flex flex-row items-center justify-between'>
        <div className='my-5 flex items-center gap-2'>
          <p className='text-2xl font-bold'>Tambah Artikel</p>
          {isPublished ? (
            <span className='text-xs bg-green-500 text-white font-medium rounded-sm py-1 px-2'>published</span>
          ) : (
            <span className='text-xs bg-gray-300 text-black font-medium rounded-sm py-1 px-2'>unpublished</span>
          )}
        </div>
        <div className=''>
          {isPublished ? (
            <Button
              onClick={handleUnpublishArticle}
              disabled={loading}
              variant='outline'
              className='text-gray-600 border-gray-400'
            >
              {loading ? 'Unpublishing...' : 'Unpublish'}
            </Button>
          ) : (
            <Button onClick={handlePublishArticle} disabled={loading}>
              {loading ? 'Mempublikasi...' : 'Publikasi'}
            </Button>
          )}
        </div>
      </div>
      <form onSubmit={handleSubmit} className='space-y-3'>
        <div id='group-input' className='group'>
          <label htmlFor='title' className=' text-black font-medium'>
            Judul
          </label>
          <input
            type='text'
            id='title'
            name='title'
            value={formData.title}
            onChange={handleChange}
            className='border-2 border-gray-200 w-full px-2 py-1 rounded-sm focus:border-primary focus:duration-300 focus:outline-none'
          />
        </div>
        <div id='group-input' className='group'>
          <label htmlFor='slug' className='focus:text-primary text-black font-medium'>
            Slug
          </label>
          <input
            type='text'
            id='slug'
            name='slug'
            value={formData.slug}
            onChange={handleChange}
            disabled
            className='border-2 border-gray-200 w-full px-2 py-1 rounded-sm focus:border-primary focus:duration-300 focus:outline-none'
          />
        </div>
        <div id='group-input' className='group'>
          <label htmlFor='slug' className='focus:text-primary text-black font-medium'>
            Kategori
          </label>
          <select
            id='category_id'
            name='category_id'
            value={formData.category_id || ''}
            onChange={handleChange}
            className='border-2 border-gray-200 w-full px-2 py-1 rounded-sm focus:border-primary focus:duration-300 focus:outline-none'
          >
            <option value='' disabled>
              Pilih kategori
            </option>
            {categories?.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div id='group-input' className='group'>
          <label htmlFor='slug' className='focus:text-primary text-black font-medium'>
            Thumbnail
          </label>
          <input
            type='file'
            id='thumbnail'
            name='thumbnail'
            accept='image/*'
            onChange={handleThumbnailChange}
            className='border-2 border-gray-200 w-full px-2 py-1 rounded-sm focus:border-primary focus:duration-300 focus:outline-none'
          />
        </div>
        {thumbnailPreview && (
          <Image
            src={thumbnailPreview}
            width={200}
            height={100}
            alt='Preview'
            className='w-40 h-40 object-cover mt-2'
          />
        )}
        <RichTextEditorForm value={formData.content} onChange={handleEditorChange} />
        <div className=''>
          <Button type='submit' variant='default' disabled={loading}>
            {loading ? 'Loading ...' : 'Simpan'}
          </Button>
        </div>
      </form>
    </div>
  );
}
