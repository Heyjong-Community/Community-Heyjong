import { User } from '@/types/auth';

export async function GetListUsers() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/user/list`, {
      credentials: 'include',
    });

    const data = await res.json();

    if (res.status === 401) {
      throw new Error('SESSION_EXPIRED');
    }

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Failed to fetch list users');
    }

    return data;
  } catch (error) {
    throw new Error((error as Error).message || 'Network error');
  }
}

export async function AddNewAccount(payload: User) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/user/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (res.status === 401) {
      throw new Error('SESSION_EXPIRED');
    }

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Failed to add data');
    }

    return data.data;
  } catch (error) {
    throw new Error((error as Error).message || 'Network error');
  }
}

export async function GetProfileAccount() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/user/profile`, {
      credentials: 'include',
    });

    const data = await res.json();

    if (res.status === 401) {
      throw new Error('SESSION_EXPIRED');
    }

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Failed to fetch data profile');
    }

    return data;
  } catch (error) {
    throw new Error((error as Error).message || 'Network error');
  }
}

export async function ChangePasswordAccount({
  passwordPast,
  passwordNew,
}: {
  passwordPast: string;
  passwordNew: string;
}) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/user/change-password`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        passwordPast,
        passwordNew,
      }),
    });

    const data = await res.json();

    if (res.status === 401) {
      throw new Error('SESSION_EXPIRED');
    }

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Failed to change password');
    }

    return data.data;
  } catch (error) {
    throw new Error((error as Error).message || 'Network error');
  }
}
