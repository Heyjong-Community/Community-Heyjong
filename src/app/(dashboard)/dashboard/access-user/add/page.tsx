'use client';

import { Button } from '@/components/ui/button';
import { useAddNewAccount } from '@/hooks/user/userUser';
import { User } from '@/types/auth';
import React, { useState } from 'react';

export default function AddNewUser() {
  const { loading, handleCreateAccount } = useAddNewAccount();

  const [addUser, setAddUser] = useState<User>({
    fullname: '',
    nickname: '',
    email: '',
    username: '',
    role: 'Member',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setAddUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCreateAccount(addUser);
  };

  return (
    <div className='p-5'>
      <div className='flex flex-row items-center justify-between'>
        <div className='my-5 flex items-center gap-2'>
          <p className='text-2xl font-bold'>Tambah User</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className='space-y-3'>
        <div id='group-input' className='group'>
          <label htmlFor='fullname' className=' text-black font-medium'>
            Nama Lengkap <span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            id='fullname'
            name='fullname'
            value={addUser.fullname}
            onChange={handleChange}
            className='border-2 border-gray-200 w-full px-2 py-1 rounded-sm focus:border-primary focus:duration-300 focus:outline-none'
            required
          />
        </div>
        <div id='group-input' className='group'>
          <label htmlFor='nickname' className=' text-black font-medium'>
            Nama Panggilan <span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            id='nickname'
            name='nickname'
            value={addUser.nickname}
            onChange={handleChange}
            className='border-2 border-gray-200 w-full px-2 py-1 rounded-sm focus:border-primary focus:duration-300 focus:outline-none'
            required
          />
        </div>
        <div id='group-input' className='group'>
          <label htmlFor='email' className=' text-black font-medium'>
            Email <span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            id='email'
            name='email'
            placeholder='member@mail.com'
            value={addUser.email}
            onChange={handleChange}
            className='border-2 border-gray-200 w-full px-2 py-1 rounded-sm focus:border-primary focus:duration-300 focus:outline-none'
            required
          />
        </div>
        <div id='group-input' className='group'>
          <label htmlFor='username' className=' text-black font-medium'>
            Username <span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            id='username'
            name='username'
            value={addUser.username}
            onChange={handleChange}
            className='border-2 border-gray-200 w-full px-2 py-1 rounded-sm focus:border-primary focus:duration-300 focus:outline-none'
            required
          />
        </div>
        <div id='group-input' className='group'>
          <label htmlFor='slug' className='focus:text-primary text-black font-medium'>
            Kategori <span className='text-red-500'>*</span>
          </label>
          <select
            id='role'
            name='role'
            required
            value={addUser.role || ''}
            onChange={handleChange}
            className='border-2 border-gray-200 w-full px-2 py-1 rounded-sm focus:border-primary focus:duration-300 focus:outline-none'
          >
            <option value='' disabled>
              Pilih status
            </option>
            <option value='SuperAdmin'>SuperAdmin</option>
            <option value='Admin'>Admin</option>
            <option value='Staff'>Staff</option>
            <option value='Member'>Member</option>
          </select>
        </div>
        <div className=''>
          <Button type='submit' variant='default' disabled={loading}>
            {loading ? 'loading...' : 'Simpan'}
          </Button>
        </div>
      </form>
    </div>
  );
}
