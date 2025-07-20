import Image from 'next/image';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { FaInstagram, FaLinkedinIn, FaTiktok } from 'react-icons/fa6';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface JongersProps {
  photo?: string;
  name: string;
  position: string;
  instagram?: string;
  tiktok?: string;
  linkedin?: string;
}

export default function Jongers({ photo, name, position, instagram, tiktok, linkedin }: JongersProps) {
  useEffect(() => {
    AOS.init({
      delay: 100,
    });
  }, []);
  return (
    // <div id='card-jongers' className='w-40 md:w-60 xl:w-96 h-auto'>
    <div id='card-jongers' className='' data-aos='flip-left' data-aos-duration='2000'>
      <Image src={`${photo}`} width={800} height={800} alt='jongers' className='w-full object-cover' />
      <div className='bg-white py-6 px-4 text-center'>
        <h4 className='text-black text-xl font-semibold'>{name}</h4>
        <p className='text-base text-black'>{`${position === 'Member' ? 'Jongers' : position}`}</p>
        <div className='mt-2 flex items-center justify-center gap-2'>
          <Link href={`${instagram}`}>
            <FaInstagram className='size-4' />
          </Link>
          <Link href={`${tiktok}`}>
            <FaTiktok className='size-4' />
          </Link>
          <Link href={`${linkedin}`}>
            <FaLinkedinIn className='size-4' />
          </Link>
        </div>
      </div>
    </div>
  );
}
