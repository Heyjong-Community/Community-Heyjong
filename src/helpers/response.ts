export async function handleResponse(res: Response, defaultMessage: string) {
  const data = await res.json();

  if (res.status === 401) {
    throw new Error('Silakan login');
  }

  if (res.status === 403) {
    throw new Error('Akses ditolak');
  }

  if (!res.ok) {
    throw new Error(data.message || defaultMessage);
  }

  return data;
}
