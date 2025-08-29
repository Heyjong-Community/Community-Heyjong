'use client';

import { useLogin } from '@/hooks/auth/useLogin';
import Link from 'next/link';
import React, { useState } from 'react';

export default function LoginPage() {
  const { handleLogin, loading, error } = useLogin();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin({ username, password });
  };

  return (
    <div className='bg-[url("/images/jongcamp.webp")] h-screen bg-cover bg-center w-full'>
      <div className='bg-black/30 h-full w-full flex items-center justify-center px-5'>
        <div className='w-sm bg-white/30 backdrop-blur-sm h-fit rounded-lg p-7'>
          <h3 className='text-white text-3xl font-bold text-center uppercase'>Dashboard Jongers</h3>
          {error && (
            <div className='bg-primary py-1 w-full my-3 rounded-md'>
              <p className='text-white text-sm text-center font-medium'>{error}</p>
            </div>
          )}
          <form className='space-y-5 mt-5' onSubmit={handleSubmit}>
            <div id='group-input' className='group'>
              <label htmlFor='username' className='focus:text-primary text-white'>
                Username
              </label>
              <input
                type='text'
                id='username'
                name='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className='border-b-2 border-white w-full focus:border-primary text-white focus:duration-300 focus:outline-none py-2'
              />
            </div>
            <div id='group-input'>
              <label htmlFor='password' className='focus:text-primary text-white'>
                Password
              </label>
              <input
                type='password'
                id='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='border-b-2 border-white w-full focus:border-primary text-white focus:duration-300 focus:outline-none py-2'
              />
            </div>
            <div className=''>
              <button
                disabled={loading}
                type='submit'
                className='w-full rounded-xl bg-primary/60 hover:bg-primary hover:duration-300 text-white font-semibold py-2 text-center text-base cursor-pointer'
              >
                {loading ? 'Loading...' : 'Submit'}
              </button>
            </div>
          </form>
          <div className='mt-4'>
            <p className='text-base text-white text-center'>Gak punya akun? atau gak bisa login?</p>
            <p className='text-base text-white text-center'>
              silakan chat{' '}
              <Link
                href={`#`}
                target='_blank'
                rel='noopener noreferrer'
                className='font-semibold underline decoration-primary underline-offset-2'
              >
                Admin
              </Link>{' '}
              ya
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
