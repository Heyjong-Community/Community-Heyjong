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

      return response;
    } catch (error) {
      // if (error instanceof Error) {
      //   toast.error(error.message);
      //   setError('Terjadi Kesalahan');
      // }
      const message = error instanceof Error ? error.message : 'Terjadi kesalahan';

      toast.error(message);
      setError(message);

      // throw new Error(message);
    } finally {
      setLoading(false);
    }
  };

  return { handleLogin, loading, error };
}
