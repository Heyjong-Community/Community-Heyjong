// import Image from 'next/image';
import React from 'react';

export default function LoginPage() {
  return (
    <div className='bg-[url("/images/jongcamp.webp")] h-screen bg-cover bg-center w-full'>
      <div className='bg-black/30 h-full w-full flex items-center justify-center'>
        {/* <div className='w-sm bg-white/30 backdrop-blur-sm h-80 rounded-lg p-7'>
          <div className='flex items-center justify-center'>
            <Image
              src='/images/logo-color.png'
              width={300}
              height={300}
              alt='logo'
              className='size-16 md:size-16 lg:size-20'
            />
            <h2 className='text-xl text-white font-semibold leading-5'>
              HEYJONG <br /> COMMUNITY
            </h2>
          </div>
        </div> */}
        <h1 className='text-white font-bold text-5xl text-center uppercase'>Coming Soon</h1>
      </div>
    </div>
  );
}
