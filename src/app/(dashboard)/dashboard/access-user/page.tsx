'use client';

import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { columns } from './components/column-table';
import { useListUsers } from '@/hooks/user/userUser';

export default function AccessUser() {
  const { listUsers, loading, error, refetch } = useListUsers();

  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
        <button onClick={refetch}>Retry</button>
      </div>
    );
  }

  return (
    <div className='p-5'>
      <div className='flex flex-row items-center justify-between'>
        <div className='my-5 text-2xl font-bold'>Akses Dashboard User</div>
        <Button asChild variant={'default'}>
          <Link href={`/dashboard/access-user/add`}>
            <Plus className='mr-2 h-4 w-4' />
            Tambah Data
          </Link>
        </Button>
      </div>
      <div className=''>
        {loading ? (
          <p className='text-black text-sm'>Loading...</p>
        ) : (
          <DataTable columns={columns} data={listUsers ?? []} />
        )}
      </div>
    </div>
  );
}
