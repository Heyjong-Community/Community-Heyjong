'use client';

import { DataTable } from '@/components/ui/data-table';
import React, { useEffect } from 'react';
import { columns } from './components/column-table';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import { useCategories } from '@/hooks/category/useCategories';

export default function CategoryPage() {
  const { categories, loading, error, fetchCategories, pagination } = useCategories();

  useEffect(() => {
    fetchCategories(1, 10);
  }, [fetchCategories]);

  if (loading) {
    return <p className='text-base font-semibold text-black'>Loading ...</p>;
  }

  if (error) {
    return <p className='text-base font-semibold text-black'>Terjadi error</p>;
  }

  return (
    <div className='p-5'>
      <div className='flex flex-row items-center justify-between'>
        <div className='my-5 text-2xl font-bold'>Kategori</div>
        <Button asChild variant={'default'}>
          <Link href={`/dashboard/category/add`}>
            <Plus className='mr-2 h-4 w-4' />
            Tambah Data
          </Link>
        </Button>
      </div>
      <div className=''>
        <DataTable columns={columns} data={categories ?? []} />
      </div>
      <div className='flex items-center justify-end space-x-2 py-4'>
        <Button
          variant='outline'
          size='sm'
          onClick={() => fetchCategories((pagination?.currentPage ?? 1) - 1, 10)}
          disabled={pagination?.currentPage === 1}
        >
          Previous
        </Button>
        <span className='text-sm text-black font-medium'>
          Page {pagination?.currentPage} of {pagination?.totalPages}
        </span>
        <Button
          variant='outline'
          size='sm'
          onClick={() => fetchCategories((pagination?.currentPage ?? 1) + 1, 10)}
          disabled={pagination?.currentPage === pagination?.totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
