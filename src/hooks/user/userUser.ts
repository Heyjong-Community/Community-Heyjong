'use client';

import { AddNewAccount, GetListUsers } from '@/services/user';
import { User, UserWithId } from '@/types/auth';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'sonner';

export function useListUsers() {
  const [listUsers, setListUsers] = useState<UserWithId[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const fetchListUsers = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await GetListUsers();

      if (res.code !== 'SUCCESS') {
        throw new Error('Failed to fetch list users');
      }

      setListUsers(res.data);
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
  }, [router]);

  useEffect(() => {
    fetchListUsers();
  }, [fetchListUsers]);

  return {
    listUsers,
    loading,
    error,
    refetch: fetchListUsers,
  };
}

export function useAddNewAccount() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleCreateAccount = async (payload: User) => {
    setLoading(true);
    setError(null);

    try {
      await AddNewAccount(payload);
      // setData(newAccount);
      toast.success('Behasil tambah akun baru');
      router.push('/dashboard/access-user');
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

  return { loading, error, handleCreateAccount };
}
