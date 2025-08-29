'use client';

import { Button } from '@/components/ui/button';
import { useCategory } from '@/hooks/category/useCategory';
import { updateCategory } from '@/services/category';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';

export default function EditCategoryPage() {
  const params = useParams();
  const router = useRouter();

  const { id } = params;
  const { category, loading, error } = useCategory(id as string);

  const [name, setName] = useState<string>('');
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (category) {
      setName(category.name);
    }
  }, [category]);

  if (loading) {
    return <p className='text-base font-semibold text-black'>Loading ...</p>;
  }

  if (error) {
    return <p className='text-base font-semibold text-black'>Terjadi error</p>;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!id) return;

    setSubmitting(true);
    setSubmitError(null);

    try {
      await updateCategory(id as string, name);
      toast.success('Berhasil edit ketegori');
      setTimeout(() => {
        router.push('/dashboard/category');
      }, 3000);
    } catch (error) {
      setSubmitError((error as Error).message);
      toast.error(`Gagal: ${(error as Error).message}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className='p-5'>
      <div className='flex flex-row items-center justify-between'>
        <div className='my-5 flex items-center gap-2'>
          <p className='text-2xl font-bold'>Edit Kategori</p>
        </div>
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
            onChange={(e) => setName(e.target.value)}
            className='border-2 border-gray-200 w-full px-2 py-1 rounded-sm focus:border-primary focus:duration-300 focus:outline-none'
          />
        </div>
        {submitError && <p className='text-red-500 text-sm'>{submitError}</p>}
        <div className=''>
          <Button variant='default'>{submitting ? 'Saving...' : 'Submit'}</Button>
        </div>
      </form>
    </div>
  );
}
