'use client';

import { daftarMenu, MenuItem } from '@/utils/navigation';
import Image from 'next/image';
// import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function Navbar() {
  const [hasMounted, setHasMounted] = useState(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);
  const route = usePathname();

  console.log('ini route path nya', route);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    setHasMounted(true);

    const handleScroll = (): void => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!hasMounted) return null;

  return (
    <nav
      className={`fixed top-0 z-50 flex w-full items-center justify-between px-10 py-4 ${
        openMenu ? 'bg-black transition-all' : ''
      } ${hasScrolled ? 'bg-opacity-70 bg-white transition-all' : 'transition-all'}`}
    >
      <div className='flex items-center'>
        <Image
          src='/images/logo-color.png'
          width={300}
          height={300}
          alt='logo'
          className='size-12 md:size-16 lg:size-20'
        />
        <h2 className={`text-xl font-semibold leading-5 ${hasScrolled ? 'text-black' : 'text-white'}`}>
          HEYJONG <br /> COMMUNITY
        </h2>
      </div>
      <ul className='hidden gap-x-8 lg:flex lg:items-center'>
        {daftarMenu.map((menu: MenuItem, index: number) => (
          <li key={index}>
            <Link
              href={menu.link}
              className={`text-sm font-semibold lg:text-[22px] uppercase ${
                route === menu.link || (menu.link !== '/' && route.startsWith(menu.link))
                  ? 'text-primary'
                  : hasScrolled
                  ? 'text-black font-semibold'
                  : 'text-white'
              }`}
            >
              {menu.nama}
            </Link>
          </li>
        ))}
      </ul>
      <div className='my-auto lg:hidden'>
        <button onClick={handleOpenMenu} className='flex flex-col gap-2'>
          <span
            className={`h-[2px] w-6 ${
              hasScrolled ? 'bg-black' : 'bg-white'
            } transition-transform duration-300 ease-in-out ${openMenu ? 'translate-y-1.5 rotate-45' : ''}`}
          ></span>
          <span
            className={`h-[2px] w-6 ${
              hasScrolled ? 'bg-black' : 'bg-white'
            } transition-transform duration-300 ease-in-out ${openMenu ? '-translate-y-1 -rotate-45' : ''}`}
          ></span>
        </button>
      </div>
      {openMenu && (
        <div className='absolute inset-0 top-full transition-all duration-300 ease-in'>
          <div className='space-y-3 bg-black text-right'>
            <ul>
              {daftarMenu.map((menu: MenuItem, index: number) => (
                <li
                  key={index}
                  className={`block ${
                    route === menu.link || (menu.link !== '/' && route.startsWith(menu.link))
                      ? 'border-primary text-primary border-l-4'
                      : 'text-white'
                  } px-5 py-3 text-start text-base`}
                >
                  <Link href={menu.link} onClick={handleOpenMenu}>
                    {menu.nama}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
