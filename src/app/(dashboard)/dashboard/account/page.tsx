'use client';

import { Button } from '@/components/ui/button';
import { useChangePasswordAccount, useProfile } from '@/hooks/user/userUser';
import React, { useState } from 'react';

export default function AccountUser() {
  const { user, loading, error: ErrorProfile, refetch } = useProfile();
  const { handleUpdatePassword } = useChangePasswordAccount(refetch);

  const [changePassword, setChangePassword] = useState({
    passwordPast: '',
    passwordNew: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setChangePassword((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitChangePassword = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    handleUpdatePassword(changePassword);
    setChangePassword({
      passwordPast: '',
      passwordNew: '',
    });
  };

  if (ErrorProfile) {
    return <p className='text-center text-black'>Gagal ambil date account</p>;
  }

  return (
    <div className='p-5'>
      <div className='flex flex-row items-center justify-between'>
        <div className='my-5 flex items-center gap-2'>
          <p className='text-2xl font-bold'>Profile User</p>
        </div>
      </div>
      <div className='space-y-3'>
        <div id='group-input' className='group'>
          <label htmlFor='fullname' className=' text-black font-medium'>
            Nama Lengkap
          </label>
          <input
            type='text'
            id='fullname'
            name='fullname'
            value={user?.fullname || ''}
            onChange={(e) => e.target.value}
            disabled
            className='border-2 border-gray-200 w-full px-2 py-1 rounded-sm focus:border-primary focus:duration-300 focus:outline-none'
            required
          />
        </div>
        <div id='group-input' className='group'>
          <label htmlFor='fullname' className=' text-black font-medium'>
            Username
          </label>
          <input
            type='text'
            id='fullname'
            name='fullname'
            value={user?.username || ''}
            onChange={(e) => e.target.value}
            disabled
            className='border-2 border-gray-200 w-full px-2 py-1 rounded-sm focus:border-primary focus:duration-300 focus:outline-none'
            required
          />
        </div>
      </div>
      <hr className='mt-8 border-2 border-gray-300' />
      <div className='my-4'>
        <p className='text-lg font-bold'>Ganti Password</p>
      </div>
      <form onSubmit={handleSubmitChangePassword} className='space-y-3'>
        <div id='group-input' className='group'>
          <label htmlFor='passwordPast' className=' text-black font-medium'>
            Ketik Password Lama
          </label>
          <input
            type='password'
            id='passwordPast'
            name='passwordPast'
            value={changePassword.passwordPast}
            onChange={handleChange}
            className='border-2 border-gray-200 w-full px-2 py-1 rounded-sm focus:border-primary focus:duration-300 focus:outline-none'
            required
          />
        </div>
        <div id='group-input' className='group'>
          <label htmlFor='passwordNew' className=' text-black font-medium'>
            Ketik Password Baru
          </label>
          <input
            type='password'
            id='passwordNew'
            name='passwordNew'
            value={changePassword.passwordNew}
            onChange={handleChange}
            className='border-2 border-gray-200 w-full px-2 py-1 rounded-sm focus:border-primary focus:duration-300 focus:outline-none'
            required
          />
        </div>
        <div className=''>
          <Button type='submit' variant='default' disabled={loading}>
            {loading ? 'loading...' : 'Ganti Password'}
          </Button>
        </div>
      </form>
    </div>
  );
}
