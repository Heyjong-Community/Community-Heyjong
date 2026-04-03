'use client';

import { Button } from '@/components/ui/button';
import { ColumnDef } from '@tanstack/react-table';
import { Pencil } from 'lucide-react';
import Link from 'next/link';
import RemoveMemberButton from './remove-button';
import { Member } from '@/types/member';

export const getColumns = (onRemove: (id: string) => Promise<void>): ColumnDef<Member>[] => [
  {
    header: 'Nama Member',
    accessorKey: 'fullname',
  },
  {
    header: 'Nama Panggilan',
    accessorKey: 'nickname',
  },
  {
    header: 'Gender',
    accessorKey: 'gender',
  },
  {
    header: 'Actions',
    id: 'actions',
    cell: ({ row }) => {
      const member = row.original as Member;
      return (
        <div className='inline-flex gap-5 items-center'>
          <Button variant='secondary' size='sm' asChild>
            <Link href={`/dashboard/member/edit/${member.id}`}>
              <Pencil className='h-4 w-4' />
              Edit
            </Link>
          </Button>
          <RemoveMemberButton id={member.id} name={member.fullname} onRemove={onRemove} />
        </div>
      );
    },
  },
];
