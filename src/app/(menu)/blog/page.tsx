'use client';

import React, { useEffect } from 'react';
import { fraunces } from '@/utils/fonts';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function BlogPage() {
  useEffect(() => {
    AOS.init({
      delay: 100,
    });
  }, []);
  return (
    <div>
      <section className="bg-[url('/images/jongcamp.webp')] bg-cover bg-center bg-fixed w-full h-96">
        <div className='bg-black/30 h-full w-full px-5 md:px-0 flex items-center justify-center'>
          <div className='w-full md:w-3/4' data-aos='fade-up' data-aos-duration='1000'>
            <h1 className='font-semibold text-4xl md:text-[40px] lg:text-[90px] lg:leading-24 text-white'>BLOG</h1>
            <p
              className={`mt-4 w-full lg:w-3/4 xl:w-1/2 font-semibold text-sm md:text-base lg:text-lg text-white ${fraunces.className}`}
            >
              Setiap orang punya cerita. Dan di sini, kita semua bisa saling berbagi, belajar, dan tumbuh bersama. Ini
              ruang kita.
            </p>
          </div>
        </div>
      </section>
      <section className='px-5 py-24'>
        <h3 className='text-black text-3xl text-center font-semibold'>Kategori Blog</h3>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5'>
          <div className='bg-primary group relative h-32 rounded-xl p-5 flex flex-col justify-end overflow-hidden'>
            <p className={`text-white text-3xl font-semibold text-center uppercase relative z-10`}>Content Creation</p>
            <h2 className='absolute z-0 top-1/2 -translate-y-1/2 text-8xl text-black/20 uppercase font-extrabold transition-all duration-500'>
              Heyjong <br /> Community
            </h2>
          </div>
          <div className='bg-primary group relative h-32 rounded-xl p-5 flex flex-col justify-end overflow-hidden'>
            <p className={`text-white text-3xl font-semibold text-center uppercase relative z-10`}>Kajian</p>
            <h2 className='absolute z-0 top-1/2 -translate-y-1/2 text-8xl text-black/20 uppercase font-extrabold'>
              Heyjong <br /> Community
            </h2>
          </div>
          <div className='bg-primary group relative h-32 rounded-xl p-5 flex flex-col justify-end overflow-hidden'>
            <p className={`text-white text-3xl font-semibold text-center uppercase relative z-10`}>Intelektualitas</p>
            <h2 className='absolute z-0 top-1/2 -translate-y-1/2 text-8xl text-black/20 uppercase font-extrabold'>
              Heyjong <br /> Community
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}
