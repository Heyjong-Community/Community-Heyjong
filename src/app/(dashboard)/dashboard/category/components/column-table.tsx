'use client';

import { Button } from '@/components/ui/button';
import { Category } from '@/types/category';
import { ColumnDef } from '@tanstack/react-table';
import { Pencil } from 'lucide-react';
import Link from 'next/link';
import RemoveCategoryButton from './remove-button';

export const columns: ColumnDef<Category>[] = [
  {
    header: 'Nama Kategori',
    accessorKey: 'name',
  },
  {
    header: 'Slug',
    accessorFn: (row) => row.slug,
  },
  {
    header: 'Actions',
    id: 'actions',
    cell: ({ row }) => {
      const category = row.original as Category;
      return (
        <div className='inline-flex gap-5 items-center'>
          <Button variant='secondary' size='sm' asChild>
            <Link href={`/dashboard/category/edit/${category.id}`}>
              <Pencil className='h-4 w-4' />
              Edit
            </Link>
          </Button>
          <RemoveCategoryButton id={category.id} name={category.name} />
          {/* <Button size='sm' type='submit' variant='destructive'>
            <Trash className='h-4 w-4' />
            Hapus
          </Button> */}
        </div>
      );
    },
  },
];
