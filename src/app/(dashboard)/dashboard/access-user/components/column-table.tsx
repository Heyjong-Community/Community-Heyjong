'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { UserWithId } from '@/types/auth';
import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal, Pencil, Trash } from 'lucide-react';
import Link from 'next/link';

export const columns: ColumnDef<UserWithId>[] = [
  {
    header: 'Nama User',
    accessorKey: 'fullname',
  },
  {
    header: 'Username',
    accessorKey: 'username',
  },
  {
    header: 'Status',
    accessorKey: 'role',
  },
  {
    header: 'Actions',
    id: 'actions',
    cell: ({ row }) => {
      const user = row.original as UserWithId;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <span className='sr-only'>Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end' className='space-y-1'>
            <Link href={`/dashboard/access-user/edit/${user.id}`}>
              <DropdownMenuItem className='flex items-center gap-2 hover:bg-gray-100'>
                <Pencil className='h-4 w-4 text-blue-500' />
                <p className='text-blue-500'>Edit</p>
              </DropdownMenuItem>
            </Link>
            <Link href={`/dashboard/access-user/edit`}>
              <DropdownMenuItem className='flex items-center gap-2 hover:bg-gray-100'>
                <Trash className='h-4 w-4 text-red-500' />
                <p className='text-red-500'>Hapus</p>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
