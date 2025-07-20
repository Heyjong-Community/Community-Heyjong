'use client';

import { fraunces } from '@/utils/fonts';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    AOS.init({
      delay: 100,
    });
  }, []);

  return (
    <div className=''>
      {/* <section className="bg-[url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-fixed w-full h-screen"> */}
      <section className="bg-[url('/images/jongcamp.webp')] bg-cover bg-center bg-fixed w-full h-screen">
        <div className='bg-black/30 h-full w-full px-5 md:px-0 flex items-center justify-center'>
          <div className='w-full md:w-3/4' data-aos='fade-up' data-aos-duration='1000'>
            <p className='text-xs md:text-sm lg:text-base text-white uppercase font-bold'>
              WELCOME TO HEYJONG COMMUNITY
            </p>
            <h1 className='font-semibold text-4xl md:text-[40px] lg:text-[90px] lg:leading-24 text-white'>
              Let&apos;s Grow Together & <br /> Spread Good Vibes
            </h1>
            <p
              className={`mt-4 w-full lg:w-3/4 xl:w-1/2 font-semibold text-sm md:text-base lg:text-lg text-white ${fraunces.className}`}
            >
              Heyjong Community merupakan wadah bagi para pemuda untuk mengembangkan potensi diri dan melatih data cipta
              sehingga mampu berperan aktif dalam menebarkan kebaikan baik di dunia maya dalam bentuk kreasi konten
              digital maupun dunia nyata dalam bentuk kegiatan-kegiatan sosial.
            </p>
            <div className='mt-4 flex items-stretch gap-2.5'>
              <Link href={`/tentang-kami`}>
                <button className='uppercase cursor-pointer font-bold text-xs md:text-sm lg:text-base bg-[#DF334D] text-white px-6 py-1 rounded-md '>
                  Tentang Kami
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className='h-screen'></section>
      <section className="bg-[url('/images/jongcamp.webp')] bg-cover bg-bottom">
        <div className='py-32 flex items-center justify-center bg-black/30'>
          <div className=''>
            <h1 className='uppercase text-white text-6xl text-center font-bold'>Come Join Us!</h1>
            <div className='flex justify-center items-center gap-3'>
              <Link href={`https://heyjong.id/oprecMember`} target='_blank' rel='noopener noreferrer'>
                <button className='mt-6 uppercase cursor-pointer font-bold text-xs md:text-sm lg:text-lg bg-[#DF334D] text-white px-6 py-1 rounded-md '>
                  Gass Join
                </button>
              </Link>
              <Link href={`#`} target='_blank' rel='noopener noreferrer'>
                <button className='mt-6 uppercase cursor-pointer font-bold text-xs md:text-sm lg:text-lg bg-white text-black px-6 py-1 rounded-md '>
                  Tanya-tanya Dulu
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
