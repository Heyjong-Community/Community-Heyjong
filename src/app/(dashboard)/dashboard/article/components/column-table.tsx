'use client';

import { Button } from '@/components/ui/button';
import { formatDate } from '@/helpers/formatDate';
import { Article } from '@/types/article';
import { ColumnDef } from '@tanstack/react-table';
import { Pencil } from 'lucide-react';
import Link from 'next/link';
import RemoveCategoryButton from './remove-button';

export const columns: ColumnDef<Article>[] = [
  {
    accessorKey: 'title',
    header: 'Judul',
  },
  {
    header: 'Penulis',
    accessorFn: (row) => row.users.fullname,
  },
  {
    header: 'Kategori',
    accessorFn: (row) => row.categories.name,
  },
  {
    header: 'Tanggal Publish',
    accessorKey: 'published_date',
    cell: ({ row }) => {
      const date = row.original.published_date;
      return date ? formatDate(date) : '-';
    },
  },
  {
    header: 'Actions',
    id: 'actions',
    cell: ({ row }) => {
      const article = row.original as Article;
      return (
        <div className='inline-flex gap-5 items-center'>
          <Button variant='secondary' size='sm' asChild>
            <Link href={`/dashboard/article/edit/${article.id}`}>
              <Pencil className='h-4 w-4' />
              Edit
            </Link>
          </Button>
          <RemoveCategoryButton id={article.id} name={article.title} />
          {/* <Button size='sm' type='submit' variant='destructive'>
            <Trash className='h-4 w-4' />
            Hapus
          </Button> */}
        </div>
      );
    },
  },
];
