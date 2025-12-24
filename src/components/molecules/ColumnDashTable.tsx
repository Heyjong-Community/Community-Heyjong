'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { formatDate } from '@/helpers/formatDate';
import { Article } from '@/types/article';
import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal, Pencil } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import Link from 'next/link';

export const columnsDashTable: ColumnDef<Article>[] = [
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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <span className='sr-only'>Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end' className='space-y-1'>
            <Link href={`/dashboard/article/edit/${article.id}`}>
              <DropdownMenuItem className='flex items-center gap-2 hover:bg-gray-100'>
                <Pencil className='h-4 w-4' />
                <p>Edit</p>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
