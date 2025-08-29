'use client';

import { Book, FileStack, House, Users } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import SidebarItem from '../molecules/SidebarItem';

export default function Sidebar() {
  return (
    // <aside className='hidden w-64 overflow-y-auto bg-[#F5FFF5] lg:block'>
    <aside className='hidden w-64 grow-0 h-screen shadow bg-secondary/10 lg:block'>
      <div className='flex items-center'>
        <Image src={`/images/logo-color.png`} width={100} height={100} alt='logo' className='size-20' />
        <div className=''>
          <p className='uppercase text-lg text-primary leading-5 font-bold'>
            Heyjong <br /> Community
          </p>
        </div>
      </div>
      <ul className='px-3 space-y-2'>
        <SidebarItem href='' label='Dashboard' icon={House} />
        <li className='px-4'>
          <p className='text-gray-400 text-base font-semibold'>Artikel</p>
        </li>
        <SidebarItem href='category' label='Kategori' icon={FileStack} />
        <SidebarItem href='article' label='Artikel' icon={Book} />
        <li className='px-4'>
          <p className='text-gray-400 text-base font-semibold'>Community</p>
        </li>
        <SidebarItem href='member' label='Member' icon={Users} />
      </ul>
    </aside>
  );
}
