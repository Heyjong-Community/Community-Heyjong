'use client';

import { columnsDashTable } from '@/components/molecules/ColumnDashTable';
import { DataTable } from '@/components/ui/data-table';
import { useArticles } from '@/hooks/article/useArticles';
import { Book, BookCheck, FileStack } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect } from 'react';

export default function DashboardPage() {
  const { articles, loading: LoadingArticle, error: ErrorArticle, fetchArticles } = useArticles();

  const recentArticles = articles.slice(0, 5);

  useEffect(() => {
    fetchArticles(1, 10);
  }, [fetchArticles]);

  return (
    <div className='p-5 bg-gray-50 h-full'>
      <div className=''>
        <h1 className='text-black font-semibold text-xl md:text-2xl xl:text-3xl'>Selamat Datang, Mahdy Mubasyir</h1>
      </div>
      <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
        <div className='bg-white shadow-xl border border-gray-200 rounded-lg p-4'>
          <div className='flex'>
            <div className='flex-1'>
              <p className='text-sm md:text-base font-medium text-gray-500'>Kategori Artikel</p>
              <h1 className='text-3xl font-semibold text-black'>7</h1>
            </div>
            <FileStack className='text-gray-400 size-14' />
          </div>
        </div>
        <div className='bg-white shadow-xl border border-gray-200 rounded-lg p-4'>
          <div className='flex'>
            <div className='flex-1'>
              <p className='text-sm md:text-base font-medium text-gray-500'>Total Artikel</p>
              <h1 className='text-3xl font-semibold text-black'>60</h1>
            </div>
            <Book className='text-cyan-400 size-14' />
          </div>
        </div>
        <div className='bg-white shadow-xl border border-gray-200 rounded-lg p-4'>
          <div className='flex'>
            <div className='flex-1'>
              <p className='text-sm md:text-base font-medium text-gray-500'>Artikel Terpublish</p>
              <h1 className='text-3xl font-semibold text-black'>45</h1>
            </div>
            <BookCheck className='text-emerald-400 size-14' />
          </div>
        </div>
        <div className='bg-white shadow-xl border border-gray-200 rounded-lg p-4'>
          <div className='flex'>
            <div className='flex-1'>
              <p className='text-sm md:text-base font-medium text-gray-500'>Draft Artikel</p>
              <h1 className='text-3xl font-semibold text-black'>15</h1>
            </div>
            <Book className='text-orange-400 size-14' />
          </div>
        </div>
      </div>
      <div className='mt-8'>
        <div className='flex items-center justify-between'>
          <h2 className='text-2xl text-black font-semibold mb-4'>Artikel Terbaru</h2>
          <div className=''>
            <Link href={`/dashboard/article`}>
              <p className='text-blue-400 underline font-medium text-base'>Lihat semua</p>
            </Link>
          </div>
        </div>
        {LoadingArticle ? (
          <p className='text-sm text-center text-black'>Loading...</p>
        ) : ErrorArticle ? (
          <p className='text-sm text-red-500 text-center'>{ErrorArticle}</p>
        ) : (
          <DataTable columns={columnsDashTable} data={recentArticles ?? []} />
        )}
      </div>
    </div>
  );
}
