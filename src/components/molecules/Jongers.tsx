import Image from 'next/image';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { FaInstagram, FaLinkedinIn, FaTiktok } from 'react-icons/fa6';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface JongersProps {
  photo?: string;
  name: string;
  gender: 'Men' | 'Women';
  position: string;
  instagram?: string;
  tiktok?: string;
  linkedin?: string;
}

export default function Jongers({ photo, name, gender, position, instagram, tiktok, linkedin }: JongersProps) {
  useEffect(() => {
    AOS.init({
      delay: 100,
    });
  }, []);
  return (
    <div id='card-jongers' className='' data-aos='flip-left' data-aos-duration='2000'>
      {photo ? (
        <Image src={`${photo}`} width={800} height={800} alt='jongers' className='w-full object-cover' />
      ) : (
        <div className="aspect-square w-full overflow-hidden bg-[url('/images/background.webp')] bg-cover">
          <div className='bg-primary/40 w-full h-full'>
            <Image
              src={gender === 'Men' ? '/images/jong.webp' : '/images/dinda.webp'}
              width={600}
              height={600}
              alt='jongers'
              className='object-cover'
            />
          </div>
        </div>
      )}
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
