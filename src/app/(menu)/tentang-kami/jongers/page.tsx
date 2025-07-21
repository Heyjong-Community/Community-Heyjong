'use client';

import Jongers from '@/components/molecules/Jongers';
import {
  bendahara,
  managerKomunitas,
  member,
  orderedComdev,
  orderedCreative,
  orderedEvent,
  sekretaris,
} from '@/utils/data';
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function JongersPage() {
  return (
    <div className='pb-32 bg-gray-200'>
      <section className="bg-[url('/images/jongcamp.webp')] bg-cover bg-center bg-fixed w-full h-80 mb-10">
        <div className='bg-black/30 h-full w-full px-5 md:px-0 flex items-center justify-center'>
          <div className='w-full md:w-3/4' data-aos='fade-up' data-aos-duration='1000'>
            <h1 className='font-semibold text-center text-4xl md:text-[40px] lg:text-[90px] lg:leading-24 text-white'>
              Kenalan Sama Jongers!
            </h1>
          </div>
        </div>
      </section>
      <div id='bph' className='container px-5 mx-auto mb-20'>
        <div className=''>
          <h1 className='uppercase text-3xl font-bold text-black'>BPH (Badan Pengurus Harian)</h1>
          <hr className='my-4 border-4 border-primary w-10' />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {managerKomunitas && (
            <Jongers
              photo={managerKomunitas.photo}
              name={managerKomunitas.nickname}
              position={managerKomunitas.position}
            />
          )}
          {bendahara && <Jongers photo={bendahara.photo} name={bendahara.nickname} position={bendahara.position} />}
          {sekretaris.map((jong) => (
            <Jongers key={jong.id} photo={jong.photo} name={jong.nickname} position={jong.position} />
          ))}
        </div>
      </div>
      <div id='creative' className='container px-5 mx-auto mb-20'>
        <div className=''>
          <h1 className='uppercase text-3xl font-bold text-black'>Divisi Creative</h1>
          <hr className='my-4 border-4 border-primary w-10' />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {orderedCreative.map((jong) => (
            <Jongers key={jong.id} photo={jong.photo} name={jong.nickname} position={jong.position} />
          ))}
        </div>
      </div>
      <div id='event' className='container px-5 mx-auto mb-20'>
        <div className=''>
          <h1 className='uppercase text-3xl font-bold text-black'>Divisi Event</h1>
          <hr className='my-4 border-4 border-primary w-10' />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {orderedEvent.map((jong) => (
            <Jongers key={jong.id} photo={jong.photo} name={jong.nickname} position={jong.position} />
          ))}
        </div>
      </div>
      <div id='comdev' className='container px-5 mx-auto mb-20'>
        <div className=''>
          <h1 className='uppercase text-3xl font-bold text-black'>Divisi Comdev</h1>
          <hr className='my-4 border-4 border-primary w-10' />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {orderedComdev.map((jong) => (
            <Jongers key={jong.id} photo={jong.photo} name={jong.nickname} position={jong.position} />
          ))}
        </div>
      </div>
      <div id='member' className='container px-5 mx-auto mb-20'>
        <div className=''>
          <h1 className='uppercase text-3xl font-bold text-black'>Jongers</h1>
          <hr className='my-4 border-4 border-primary w-10' />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {member.map((jong) => (
            <Jongers key={jong.id} photo={jong.photo} name={jong.nickname} position={jong.position} />
          ))}
        </div>
      </div>
    </div>
  );
}
