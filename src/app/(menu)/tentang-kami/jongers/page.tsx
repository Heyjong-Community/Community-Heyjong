'use client';

import Jongers from '@/components/molecules/Jongers';
import {
  assitenManagerKomunitas,
  bendahara,
  managerKomunitas,
  orderedEventOrganizer,
  orderedHRD,
  orderedSocmedOfficer,
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
              gender={managerKomunitas.gender}
              position={managerKomunitas.position}
            />
          )}
          {assitenManagerKomunitas && (
            <Jongers
              photo={assitenManagerKomunitas.photo}
              name={assitenManagerKomunitas.nickname}
              gender={assitenManagerKomunitas.gender}
              position={assitenManagerKomunitas.position}
            />
          )}
          {sekretaris.map((jong) => (
            <Jongers
              key={jong.id}
              photo={jong.photo}
              name={jong.nickname}
              gender={jong.gender}
              position={jong.position}
            />
          ))}
          {bendahara.map((jong) => (
            <Jongers
              key={jong.id}
              photo={jong.photo}
              name={jong.nickname}
              gender={jong.gender}
              position={jong.position}
            />
          ))}
        </div>
      </div>
      <div id='eventOrganizer' className='container px-5 mx-auto mb-20'>
        <div className=''>
          <h1 className='uppercase text-3xl font-bold text-black'>Divisi Event Organizer</h1>
          <hr className='my-4 border-4 border-primary w-10' />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {orderedEventOrganizer.map((jong) => (
            <Jongers
              key={jong.id}
              photo={jong.photo}
              name={jong.nickname}
              gender={jong.gender}
              position={jong.position}
            />
          ))}
        </div>
      </div>
      <div id='socmed' className='container px-5 mx-auto mb-20'>
        <div className=''>
          <h1 className='uppercase text-3xl font-bold text-black'>Divisi Socmed Officer</h1>
          <hr className='my-4 border-4 border-primary w-10' />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {orderedSocmedOfficer.map((jong) => (
            <Jongers
              key={jong.id}
              photo={jong.photo}
              name={jong.nickname}
              gender={jong.gender}
              position={jong.position}
            />
          ))}
        </div>
      </div>
      <div id='hrd' className='container px-5 mx-auto mb-20'>
        <div className=''>
          <h1 className='uppercase text-3xl font-bold text-black'>Divisi Human Resource Development</h1>
          <hr className='my-4 border-4 border-primary w-10' />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {orderedHRD.map((jong) => (
            <Jongers
              key={jong.id}
              photo={jong.photo}
              name={jong.nickname}
              gender={jong.gender}
              position={jong.position}
            />
          ))}
        </div>
      </div>
      {/* <div id='member' className='container px-5 mx-auto mb-20'>
        <div className=''>
          <h1 className='uppercase text-3xl font-bold text-black'>Jongers</h1>
          <hr className='my-4 border-4 border-primary w-10' />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {member.map((jong) => (
            <Jongers
              key={jong.id}
              photo={jong.photo}
              name={jong.nickname}
              gender={jong.gender}
              position={jong.position}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
}
