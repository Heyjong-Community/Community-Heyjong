import { loginService } from '@/services/auth';
import { LoginRequest } from '@/types/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

export function useLogin() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (payload: LoginRequest) => {
    try {
      setLoading(true);
      setError(null);

      const response = await loginService(payload);

      toast.success(response.message);
      router.push('/dashboard');
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
        setError('Terjadi Kesalahan');
      }
    }
  };

  return { handleLogin, loading, error };
}
