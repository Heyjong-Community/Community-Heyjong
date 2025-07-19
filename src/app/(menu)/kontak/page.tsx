'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Fraunces, Source_Sans_3 } from 'next/font/google';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';
import React from 'react';

const sourceSans = Source_Sans_3({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const fraunces = Fraunces({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function ContactPage() {
  useEffect(() => {
    AOS.init({
      delay: 100,
    });
  }, []);

  return (
    <div>
      <section className="bg-[url('/images/jongcamp.webp')] bg-cover bg-center bg-fixed w-full h-screen">
        <div className='bg-black/30 h-full w-full flex items-center justify-center'>
          <div className='w-3/4' data-aos='fade-up'>
            <h1 className='font-semibold text-3xl md:text-[40px] lg:text-[90px] xl:text-8xl leading-24 text-white uppercase'>
              Yuk, Ngobrol!
            </h1>
            <p
              className={`mt-4 w-1/2 font-semibold text-sm md:text-base lg:text-lg xl:text-xl text-white ${sourceSans.className}`}
            >
              Punya ide seru, unek-unek, atau cuma mau nyapa? Kami siap dengerin! Kirim aja pesanmu lewat form di
              bawah—jangan malu-malu!
            </p>
            <div className='mt-4 flex items-stretch gap-2.5'>
              <button className='uppercase font-bold text-xs md:text-sm lg:text-base bg-[#DF334D] text-white px-6 py-1 rounded-md '>
                ABOUT US
              </button>
              <button className='uppercase font-bold text-xs md:text-sm lg:text-base bg-white text-black px-6 py-1 rounded-md '>
                JOIN US
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className='grid grid-cols-1 md:grid-cols-2 py-12 px-6 lg:px-20 gap-16 lg:gap-24'>
        <div className=''>
          <h2 className='text-black text-3xl md:text-[40px] lg:text-6xl font-bold capitalize'>Hubungi Kami</h2>
          <hr className='my-6 border border-gray-100' />
          <form className='space-y-4'>
            <div className=''>
              <label htmlFor='fullname' className={`block font-bold text-black text-base ${fraunces.className}`}>
                Nama Lengkap<span className='text-red-500'>*</span>
              </label>
              <input
                type='text'
                id='fullname'
                name='fullname'
                className='mt-1 w-full block border border-gray-300 px-2.5 py-1.5 focus:outline-none focus:border-primary focus:ring focus:ring-primary'
              />
            </div>
            <div className=''>
              <label htmlFor='fullname' className={`block font-bold text-black text-base ${fraunces.className}`}>
                E-mail<span className='text-red-500'>*</span>
              </label>
              <input
                type='email'
                id='email'
                name='email'
                className='mt-1 w-full block border border-gray-300 px-2.5 py-1.5 focus:outline-none focus:border-primary focus:ring focus:ring-primary'
              />
            </div>
            <div className=''>
              <label htmlFor='fullname' className={`block font-bold text-black text-base ${fraunces.className}`}>
                Subjek<span className='text-red-500'>*</span>
              </label>
              <input
                type='text'
                id='subject'
                name='subject'
                className='mt-1 w-full block border border-gray-300 px-2.5 py-1.5 focus:outline-none focus:border-primary focus:ring focus:ring-primary'
              />
            </div>
            <div className=''>
              <label htmlFor='fullname' className={`block font-bold text-black text-base ${fraunces.className}`}>
                Pesan<span className='text-red-500'>*</span>
              </label>
              <textarea
                name='message'
                id='message'
                rows={5}
                className='mt-1 w-full block border border-gray-300 px-2.5 py-1.5 focus:outline-none focus:border-primary focus:ring focus:ring-primary'
              ></textarea>
            </div>
            <div className=''>
              <button className='bg-primary px-6 py-3 text-white text-lg uppercase cursor-pointer font-medium rounded-md'>
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className=''>
          <h2 className='text-black text-3xl md:text-[40px] lg:text-6xl font-bold capitalize'>Sekretariat</h2>
          <hr className='my-6 border border-gray-100' />
          <div className='space-y-4'>
            <div className='flex flex-col md:flex-row gap-1 md:gap-3 lg:gap-5 items-start gap'>
              <MapPinIcon className='size-5 lg:size-6 text-black' />
              <p className={`${fraunces.className} text-black text-base md:text-lg font-normal`}>
                Jl. H. Taiman Barat 1 No.4, RT.2/RW.2, Ps. Rebo, Kota Jakarta Timur, DKI Jakarta
              </p>
            </div>
            <div className='flex flex-col md:flex-row gap-1 md:gap-3 lg:gap-5 items-start gap'>
              <PhoneIcon className='size-5 lg:size-6 text-black' />
              <p className={`${fraunces.className} text-black text-base md:text-lg font-normal`}>
                (+62) 895-3283-10378 (Kak Dieni)
              </p>
            </div>
            <div className='flex flex-col md:flex-row gap-1 md:gap-3 lg:gap-5 items-start gap'>
              <EnvelopeIcon className='size-5 lg:size-6 text-black' />
              <p className={`${fraunces.className} text-black text-base md:text-lg font-normal`}>
                heyjongcommunity@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='w-full mt-10'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7180971389425!2d106.8611117748039!3d-6.300723993688398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed006432eb31%3A0xbeca16fdc7386591!2sSekretariat%20Heyjong%20Community!5e0!3m2!1sid!2sid!4v1746205964738!5m2!1sid!2sid'
          className='h-[500px] w-full lg:h-[450px]'
          // width="600"
          // height="450"
          // allowfullscreen=""
          loading='lazy'
          // referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}
