import { Fraunces } from 'next/font/google';
import React from 'react';
import { SocialIcon } from 'react-social-icons';

const fraunces = Fraunces({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function Footer() {
  return (
    <>
      <footer className='bg-[#1e2023] py-24 px-6 lg:px-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6 lg:w-3/4 mx-auto'>
          <div className=''>
            <p className='font-extrabold text-white text-xl uppercase'>Contact</p>
            <div className={`mt-3 ${fraunces.className}`}>
              <p className='text-white text-base font-semibold tracking-tight'>
                Jl. H. Taiman Barat 1 No.4, RT.2/RW.2, Ps. Rebo, Kota Jakarta Timur, DKI Jakarta
              </p>
              <p className='text-white text-base font-semibold tracking-tight'>0895-3283-10378 (Kak Dieni)</p>
              <p className='text-white text-base font-semibold tracking-tight'>heyjongcommunity@gmail.com</p>
            </div>
          </div>
          <div className=''>
            <p className='font-extrabold text-white text-xl uppercase'>Community</p>
            <div className={`mt-3 ${fraunces.className}`}>
              <p className='text-white text-base font-semibold tracking-tight'>Tentang Kami</p>
              <p className='text-white text-base font-semibold tracking-tight'>Kegiatan</p>
              <p className='text-white text-base font-semibold tracking-tight'>Kontak</p>
            </div>
          </div>
          <div className=''>
            <p className='font-extrabold text-white text-xl uppercase'>Kegiatan</p>
            <div className={`mt-3 ${fraunces.className}`}>
              <p className='text-white text-base font-semibold tracking-tight'>Seminar</p>
              <p className='text-white text-base font-semibold tracking-tight'>Impact</p>
              <p className='text-white text-base font-semibold tracking-tight'>Charity</p>
              <p className='text-white text-base font-semibold tracking-tight'>Ngonten</p>
              <p className='text-white text-base font-semibold tracking-tight'>Kajian & Talkshow</p>
            </div>
          </div>
          <div className=''>
            <p className='font-extrabold text-white text-xl uppercase'>Social Media</p>
            <div className={`mt-3 flex items-center gap-3 ${fraunces.className}`}>
              <SocialIcon
                url='https://www.instagram.com/heyjong_community'
                style={{ height: 40, width: 40 }}
                target='_blank'
                rel='noopener noreferrer'
              />
              <SocialIcon
                url='https://www.tiktok.com/@heyjongcommunity'
                style={{ height: 40, width: 40 }}
                target='_blank'
                rel='noopener noreferrer'
              />
              <SocialIcon
                url='https://www.youtube.com/heyjong_community'
                style={{ height: 40, width: 40 }}
                target='_blank'
                rel='noopener noreferrer'
              />
            </div>
          </div>
        </div>
      </footer>
      <div className='bg-black py-6'>
        <div className='w-3/4 mx-auto'>
          <p className='text-white uppercase font-bold'>
            COPYRIGHT &copy; 2025 - HEYJONG COMMUNITY | ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </>
  );
}
