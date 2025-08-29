'use client';

import { DataTable } from '@/components/ui/data-table';
import React, { useEffect } from 'react';
import { columns } from './components/column-table';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import { useArticles } from '@/hooks/article/useArticles';

// const dummyArticles: Article[] = [
//   {
//     title: 'Mengenal Ekosistem Mangrove',
//     category: 'Lingkungan',
//     content: 'Artikel ini membahas pentingnya ekosistem mangrove...',
//     author: 'Mahdy Mubasyir',
//     published: '2025-08-20',
//   },
//   {
//     title: 'Tips Manajemen Keuangan Pribadi',
//     category: 'Keuangan',
//     content: 'Mengatur keuangan pribadi sangat penting agar...',
//     author: 'Raihanah Kalamullah',
//     published: '2025-08-15',
//   },
//   {
//     title: 'Belajar Next.js 14 untuk Pemula',
//     category: 'Teknologi',
//     content: 'Next.js 14 hadir dengan fitur App Router...',
//     author: 'Jong Developer',
//     published: '2025-08-10',
//   },
//   {
//     title: 'Pola Hidup Sehat dengan Olahraga',
//     category: 'Kesehatan',
//     content: 'Olahraga rutin dapat meningkatkan kualitas hidup...',
//     author: 'Dindah Fitriana',
//     published: '2025-08-05',
//   },
//   {
//     title: 'Sejarah Perkembangan Islam di Nusantara',
//     category: 'Sejarah',
//     content: 'Islam masuk ke Nusantara melalui jalur perdagangan...',
//     author: 'Bop Santoso',
//     published: '2025-08-01',
//   },
// ];

export default function ArticlePage() {
  const { articles, loading, error, fetchArticles, pagination } = useArticles();

  useEffect(() => {
    fetchArticles(1, 10);
  }, [fetchArticles]);

  if (loading) {
    return <p className='text-base font-semibold text-black'>Loading ...</p>;
  }

  if (error) {
    return <p className='text-base font-semibold text-black'>Terjadi error</p>;
  }

  return (
    <div className='p-5'>
      <div className='flex flex-row items-center justify-between'>
        <div className='my-5 text-2xl font-bold'>Artikel</div>
        <Button asChild variant={'default'}>
          <Link href={`/dashboard/article/add`}>
            <Plus className='mr-2 h-4 w-4' />
            Tambah Data
          </Link>
        </Button>
      </div>
      <DataTable columns={columns} data={articles ?? []} />
      <div className='flex items-center justify-end space-x-2 py-4'>
        <Button
          variant='outline'
          size='sm'
          onClick={() => fetchArticles((pagination?.currentPage ?? 1) - 1, 10)}
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
          onClick={() => fetchArticles((pagination?.currentPage ?? 1) + 1, 10)}
          disabled={pagination?.currentPage === pagination?.totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
