'use client';

import { Button } from '@/components/ui/button';
import { useCategories } from '@/hooks/category/useCategories';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useState } from 'react';
import { toast } from 'sonner';

export default function AddCategoryPage() {
  const router = useRouter();
  const { addCategory, loading, error } = useCategories();

  const [name, setName] = useState<string>('');
  const [slug, setSlug] = useState<string>('');

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setName(newTitle);
    setSlug(generateSlug(newTitle));
  };

  const handleSlugChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSlug(generateSlug(e.target.value));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await addCategory(name, slug);
      console.log('ini hasil res add = ', res);
      toast.success('Berhasil tambah kategori');

      setName('');
      setTimeout(() => {
        router.push('/dashboard/category');
      }, 3000);
    } catch (error) {
      toast.error(`Gagal: ${(error as Error).message}`);
    }
  };
  return (
    <div className='p-5'>
      <div className='flex flex-row items-center justify-between'>
        <div className='my-5 flex items-center gap-2'>
          <p className='text-2xl font-bold'>Tambah Kategori</p>
        </div>
        {/* <Button asChild variant={'default'}>
          <Link href={`/dashboard/article/add`}>
            <Plus className='mr-2 h-4 w-4' />
            Tambah Data
          </Link>
        </Button> */}
      </div>
      <form className='space-y-3' onSubmit={handleSubmit}>
        <div id='group-input' className='group'>
          <label htmlFor='name' className=' text-black font-medium'>
            Nama Kategori
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={name}
            onChange={handleNameChange}
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
            value={slug}
            onChange={handleSlugChange}
            disabled
            className='border-2 border-gray-200 w-full px-2 py-1 rounded-sm focus:border-primary focus:duration-300 focus:outline-none'
          />
        </div>
        {error && <p className='text-red-500 text-sm'>{error}</p>}
        <div className=''>
          <Button variant='default'>{loading ? 'Saving...' : 'Submit'}</Button>
        </div>
      </form>
    </div>
  );
}
