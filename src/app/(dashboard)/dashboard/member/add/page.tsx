'use client';

import { Button } from '@/components/ui/button';
import { useAddNewMember } from '@/hooks/member/useMember';
import { FormMember } from '@/types/member';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'sonner';

export default function AddMemberPage() {
  const router = useRouter();
  const { handleAddMember, loading, error } = useAddNewMember();
  const [formData, setFormData] = useState<FormMember>({
    fullname: '',
    nickname: '',
    gender: 'Male',
    university: '',
    faculty: '',
    department: '',
    status: 'Member',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    try {
      const res = await handleAddMember(formData);
      console.log('ini hasil res add member = ', res);
      toast.success('Berhasil tambah kategori');

      setFormData({
        fullname: '',
        nickname: '',
        gender: 'Male',
        university: '',
        faculty: '',
        department: '',
        status: 'Member',
      });
      setTimeout(() => {
        router.push('/dashboard/member');
      }, 1000);
    } catch (error) {
      toast.error(`Gagal: ${(error as Error).message}`);
    }
  };

  return (
    <div className='p-5'>
      <div className='flex flex-row items-center justify-between'>
        <div className='my-5 flex items-center gap-2'>
          <p className='text-2xl font-bold'>Tambah Member</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className='space-y-3'>
        <div id='group-input' className='group'>
          <label htmlFor='fullname' className=' text-black font-medium'>
            Nama Lengkap Member
          </label>
          <input
            type='text'
            id='fullname'
            name='fullname'
            value={formData.fullname}
            onChange={handleChange}
            className='border-2 border-gray-200 w-full px-2 py-1 rounded-sm focus:border-primary focus:duration-300 focus:outline-none'
          />
        </div>
        <div id='group-input' className='group'>
          <label htmlFor='nickname' className=' text-black font-medium'>
            Nama Panggilan Member
          </label>
          <input
            type='text'
            id='nickname'
            name='nickname'
            value={formData.nickname}
            onChange={handleChange}
            className='border-2 border-gray-200 w-full px-2 py-1 rounded-sm focus:border-primary focus:duration-300 focus:outline-none'
          />
        </div>
        <div id='group-input' className='group'>
          <label htmlFor='gender' className='focus:text-primary text-black font-medium'>
            Jenis Kelamin
          </label>
          <select
            id='gender'
            name='gender'
            value={formData.gender}
            onChange={handleChange}
            className='border-2 border-gray-200 w-full px-2 py-1 rounded-sm focus:border-primary focus:duration-300 focus:outline-none'
          >
            <option value='' disabled>
              Pilih Gender
            </option>
            <option value='Male'>Laki-Laki</option>
            <option value='Female'>Perempuan</option>
          </select>
        </div>
        <div id='group-input' className='group'>
          <label htmlFor='university' className=' text-black font-medium'>
            Universitas
          </label>
          <input
            type='text'
            id='university'
            name='university'
            value={formData.university}
            onChange={handleChange}
            className='border-2 border-gray-200 w-full px-2 py-1 rounded-sm focus:border-primary focus:duration-300 focus:outline-none'
          />
        </div>
        <div id='group-input' className='group'>
          <label htmlFor='faculty' className=' text-black font-medium'>
            Fakultas
          </label>
          <input
            type='text'
            id='faculty'
            name='faculty'
            value={formData.faculty}
            onChange={handleChange}
            className='border-2 border-gray-200 w-full px-2 py-1 rounded-sm focus:border-primary focus:duration-300 focus:outline-none'
          />
        </div>
        <div id='group-input' className='group'>
          <label htmlFor='department' className=' text-black font-medium'>
            Jurusan
          </label>
          <input
            type='text'
            id='department'
            name='department'
            value={formData.department}
            onChange={handleChange}
            className='border-2 border-gray-200 w-full px-2 py-1 rounded-sm focus:border-primary focus:duration-300 focus:outline-none'
          />
        </div>
        <div id='group-input' className='group'>
          <label htmlFor='status' className='focus:text-primary text-black font-medium'>
            Status
          </label>
          <select
            id='status'
            name='status'
            value={formData.status}
            onChange={handleChange}
            className='border-2 border-gray-200 w-full px-2 py-1 rounded-sm focus:border-primary focus:duration-300 focus:outline-none'
          >
            <option value='' disabled>
              Pilih Status
            </option>
            <option value='Member'>Member</option>
            <option value='Staff'>Staff</option>
            <option value='Pengurus'>Pengurus</option>
          </select>
        </div>

        {error && <p className='text-red-500 text-sm'>{error}</p>}
        <div className=''>
          <Button variant='default'>{loading ? 'Menyimpan...' : 'Submit'}</Button>
        </div>
      </form>
    </div>
  );
}
