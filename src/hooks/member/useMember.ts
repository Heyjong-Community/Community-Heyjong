'use client';

import { AddNewMember, DeleteMember, GetAllMembers, GetMemberById, UpdateMember } from '@/services/member';
import { FormMember, Member } from '@/types/member';
import { Pagination } from '@/types/pagination';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'sonner';

export function useListMembers(page: number = 1, limit: number = 10) {
  const [listMembers, setListMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState<Pagination | null>(null);

  const router = useRouter();

  const fetchListMembers = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await GetAllMembers(page, limit);

      if (res.code !== 'SUCCESS') {
        throw new Error('Failed to fetch list users');
      }

      setListMembers(res.data);
      setPagination(res.pagination);
    } catch (err) {
      if (err instanceof Error) {
        if (err.message === 'SESSION_EXPIRED') {
          router.push('/login');
          return;
        }

        setError(err.message);
      } else {
        setError('Unknown error');
      }
    } finally {
      setLoading(false);
    }
  }, [router, page, limit]);

  useEffect(() => {
    fetchListMembers();
  }, [fetchListMembers]);

  return {
    listMembers,
    loading,
    error,
    refetch: fetchListMembers,
    pagination,
  };
}

export function useDetailMember(id: string) {
  const [member, setMember] = useState<Member | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const fetchProfile = useCallback(async () => {
    try {
      setLoading(true);
      const response = await GetMemberById(id as string);
      setMember(response.data);
    } catch (err) {
      if (err instanceof Error) {
        if (err.message === 'SESSION_EXPIRED') {
          router.push('/login');
          return;
        }

        setError(err.message);
      } else {
        setError('Unknown error');
      }
    } finally {
      setLoading(false);
    }
  }, [router, id]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return { member, loading, error, refetch: fetchProfile };
}

export function useAddNewMember() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleAddMember = async (payload: FormMember) => {
    setLoading(true);
    setError(null);

    try {
      await AddNewMember(payload);
      toast.success('Berhasil tambah member baru');
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === 'SESSION_EXPIRED') {
          router.push('/login');
          return;
        }

        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, handleAddMember };
}

export function useEditMember(id: string) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleEditMember = async (payload: FormMember) => {
    setLoading(true);
    setError(null);

    try {
      await UpdateMember(id, payload);
      toast.success('Berhasil edit member');
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === 'SESSION_EXPIRED') {
          router.push('/login');
          return;
        }

        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, handleEditMember };
}

export function useDeleteMember(id: string) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleDelteMember = async () => {
    setLoading(true);
    setError(null);

    try {
      await DeleteMember(id);
      toast.success('Berhasil hapus member');
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === 'SESSION_EXPIRED') {
          router.push('/login');
          return;
        }

        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, handleDelteMember };
}
