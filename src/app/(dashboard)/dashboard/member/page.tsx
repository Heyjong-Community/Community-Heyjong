'use client';

import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { getColumns } from './components/column-table';
import { useListMembers } from '@/hooks/member/useMember';
import { DeleteMember } from '@/services/member';
import { toast } from 'sonner';

export default function MemberPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;
  const { listMembers, loading, pagination, refetch } = useListMembers(currentPage, limit);

  const handleRemove = async (id: string) => {
    try {
      await DeleteMember(id);
      toast.success('Member berhasil dihapus');
      refetch();
    } catch (error) {
      toast.error(`Gagal menghapus member: ${(error as Error).message}`);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className='p-5'>
      <div className='flex flex-row items-center justify-between'>
        <div className='my-5 text-2xl font-bold'>Member</div>
        <Button asChild variant={'default'}>
          <Link href={`/dashboard/member/add`}>
            <Plus className='mr-2 h-4 w-4' />
            Tambah Data
          </Link>
        </Button>
      </div>
      <div className=''>
        <DataTable columns={getColumns(handleRemove)} data={listMembers ?? []} />
      </div>
      <div className='flex items-center justify-end space-x-2 py-4'>
        <Button
          variant='outline'
          size='sm'
          onClick={() => handlePageChange((pagination?.currentPage ?? 1) - 1)}
          disabled={pagination?.currentPage === 1 || loading}
        >
          Previous
        </Button>
        <span className='text-sm text-black font-medium'>
          Page {pagination?.currentPage} of {pagination?.totalPages}
        </span>
        <Button
          variant='outline'
          size='sm'
          onClick={() => handlePageChange((pagination?.currentPage ?? 1) + 1)}
          disabled={pagination?.currentPage === pagination?.totalPages || loading}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
