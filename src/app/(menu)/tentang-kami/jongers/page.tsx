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
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

export default function JongersPage() {
  return (
    <div className='py-32 bg-gray-200'>
      <div id='bph' className='container px-5 mx-auto mb-20'>
        <div className=''>
          <h1 className='text-3xl font-bold text-black'>BPH</h1>
          <hr className='my-4 border-4 border-primary w-10' />
        </div>
        <div className='hidden lg:grid grid-cols-3 gap-8'>
          {managerKomunitas && (
            <Jongers
              photo={managerKomunitas.photo}
              name={managerKomunitas.nickname}
              position={managerKomunitas.position}
            />
          )}
          {sekretaris && <Jongers photo={sekretaris.photo} name={sekretaris.nickname} position={sekretaris.position} />}
          {bendahara && <Jongers photo={bendahara.photo} name={bendahara.nickname} position={bendahara.position} />}
        </div>
        <div className='md:hidden'>
          <Swiper modules={[Navigation, Pagination]} spaceBetween={16} slidesPerView={1} slidesPerGroup={1} navigation>
            <SwiperSlide>
              {managerKomunitas && (
                <Jongers
                  photo={managerKomunitas.photo}
                  name={managerKomunitas.nickname}
                  position={managerKomunitas.position}
                />
              )}
            </SwiperSlide>
            <SwiperSlide>
              {sekretaris && (
                <Jongers photo={sekretaris.photo} name={sekretaris.nickname} position={sekretaris.position} />
              )}
            </SwiperSlide>
            <SwiperSlide>
              {bendahara && <Jongers photo={bendahara.photo} name={bendahara.nickname} position={bendahara.position} />}
            </SwiperSlide>
          </Swiper>
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
          <h1 className='uppercase text-3xl font-bold text-black'>Member</h1>
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
