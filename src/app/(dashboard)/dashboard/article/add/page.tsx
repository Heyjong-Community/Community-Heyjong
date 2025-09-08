'use client';

import RichTextEditorForm from '@/components/organism/RichTextEditor';
import { Button } from '@/components/ui/button';
import { useArticles } from '@/hooks/article/useArticles';
import { useCategories } from '@/hooks/category/useCategories';
import { NewArticlePayload } from '@/types/article';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { toast } from 'sonner';

export default function AddArticlePage() {
  const router = useRouter();
  const [formData, setFormData] = useState<NewArticlePayload>({
    title: '',
    slug: '',
    category_id: '',
    thumbnail: null,
    content: '',
  });
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);

  const { categories, fetchCategories } = useCategories();
  const { addArticle } = useArticles();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

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
      // Reset jika tidak ada file
      setFormData((prev) => ({ ...prev, thumbnail: null }));
      setThumbnailPreview(null);
      return;
    }

    // Validasi tipe file
    if (!file.type.startsWith('image/')) {
      toast.error('File harus berupa gambar');
      e.target.value = ''; // Reset input
      return;
    }

    // Validasi ukuran file (misal max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      toast.error('Ukuran file maksimal 5MB');
      e.target.value = ''; // Reset input
      return;
    }

    console.log('File yang dipilih:', {
      name: file.name,
      size: file.size,
      type: file.type,
    });

    // Set file ke form data
    setFormData((prev) => ({ ...prev, thumbnail: file }));

    // Buat preview
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.title || !formData.slug || !formData.category_id || !formData.content) {
      alert('Judul, slug, kategori, dan konten wajib diisi.');
      return;
    }

    try {
      console.log('Data yang akan dikirim:', {
        title: formData.title,
        slug: formData.slug,
        category_id: formData.category_id,
        content: formData.content,
        thumbnail: formData.thumbnail
          ? {
              name: formData.thumbnail.name,
              size: formData.thumbnail.size,
              type: formData.thumbnail.type,
            }
          : null,
      });

      const payload: NewArticlePayload = {
        title: formData.title,
        slug: formData.slug,
        content: formData.content,
        category_id: formData.category_id,
        thumbnail: formData.thumbnail,
      };

      await addArticle(payload);

      toast.success('Berhasil tambah artikel');

      setFormData({
        title: '',
        slug: '',
        category_id: '',
        thumbnail: null,
        content: '',
      });
      setThumbnailPreview(null);

      const fileInput = document.getElementById('thumbnail') as HTMLInputElement;
      if (fileInput) fileInput.value = '';

      setTimeout(() => {
        router.push('/dashboard/article');
      }, 2000);
    } catch (error) {
      console.error('kenapa error = ', error);
      toast.error(`Gagal: ${(error as Error).message}`);
    }
  };

  return (
    <div className='p-5'>
      <div className='flex flex-row items-center justify-between'>
        <div className='my-5 flex items-center gap-2'>
          <p className='text-2xl font-bold'>Tambah Artikel</p>
          <span className='text-xs bg-gray-300 text-black font-medium rounded-sm py-1 px-2'>unpublished</span>
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
          <Button type='submit' variant='default'>
            Simpan
          </Button>
        </div>
      </form>
    </div>
  );
}
