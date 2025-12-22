'use client';

import { logoutService } from '@/services/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function useLogoutUser() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogout = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await logoutService();
      console.log('hasil logout : ', res);
      router.push('/login');
      return res;
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { handleLogout, loading, error };
}
