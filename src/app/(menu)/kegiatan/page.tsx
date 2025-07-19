'use client';

import { fraunces } from '@/utils/fonts';
import { seminarGallery } from '@/utils/gallery';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { useEffect } from 'react';

export default function ActivityPage() {
  useEffect(() => {
    AOS.init({
      delay: 100,
    });
  }, []);
  return (
    <div>
      <section className="bg-[url('/images/jongcamp.webp')] bg-cover bg-center bg-fixed w-full h-screen">
        <div className='bg-black/30 h-full w-full flex items-center justify-center'>
          <div className='w-3/4 xl:container' data-aos='fade-up' data-aos-duration='1000'>
            <p className='text-xs md:text-sm lg:text-base text-white uppercase font-bold'>TENTANG HEYJONG COMMUNITY</p>
            <h1 className='font-semibold text-3xl md:text-[40px] lg:text-[90px] leading-24 text-white'>
              Let&apos;s Grow Together & <br /> Spread Good Vibes
            </h1>
            <p className={`mt-4 w-1/2 font-semibold text-sm md:text-base lg:text-lg text-white ${fraunces.className}`}>
              Heyjong Community merupakan wadah bagi para pemuda untuk mengembangkan potensi diri dan melatih data cipta
              sehingga mampu berperan aktif dalam menebarkan kebaikan baik di dunia maya dalam bentuk kreasi konten
              digital maupun dunia nyata dalam bentuk kegiatan-kegiatan sosial.
            </p>
            <div className='mt-4 flex items-stretch gap-2.5'>
              <button className='uppercase font-bold text-xs md:text-sm lg:text-base bg-[#DF334D] text-white px-6 py-1 rounded-md '>
                Ngonten
              </button>
              <button className='uppercase font-bold text-xs md:text-sm lg:text-base bg-white text-black px-6 py-1 rounded-md '>
                Impact
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className='py-24 space-y-20'>
        <div className=''>
          <div className='px-5 lg:px-24'>
            <h1 className='uppercase text-4xl font-bold text-black'>Seminar</h1>
            <hr className='my-4 border-4 border-primary w-10' />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            {seminarGallery.map((src, index) => (
              <Image key={index} src={src} width={500} height={500} alt='seminar' className='w-full h-full' />
            ))}
          </div>
        </div>
        <div className=''>
          <div className='px-5 lg:px-24'>
            <h1 className='uppercase text-4xl font-bold text-black'>Visit</h1>
            <hr className='my-4 border-4 border-primary w-10' />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'></div>
        </div>
        <div className=''>
          <div className='px-5 lg:px-24'>
            <h1 className='uppercase text-4xl font-bold text-black'>Charity</h1>
            <hr className='my-4 border-4 border-primary w-10' />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'></div>
        </div>
        <div className=''>
          <div className='px-5 lg:px-24'>
            <h1 className='uppercase text-4xl font-bold text-black'>Ngonten</h1>
            <hr className='my-4 border-4 border-primary w-10' />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'></div>
        </div>
        <div className=''>
          <div className='px-5 lg:px-24'>
            <h1 className='uppercase text-4xl font-bold text-black'>Talkshow</h1>
            <hr className='my-4 border-4 border-primary w-10' />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'></div>
        </div>
      </section>
    </div>
  );
}
