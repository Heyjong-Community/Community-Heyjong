'use client';

import { listContentHJ } from '@/utils/content';
import { fraunces } from '@/utils/fonts';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
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
              Heyjong Community merupakan wadah bagi para pemuda untuk mengembangkan potensi diri dan melatih daya cipta
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
      <section className='container px-5 py-24 mx-auto'>
        <div className='text-center'>
          <p className={`uppercase text-primary text-base font-bold ${fraunces.className}`}>What&apos;s New</p>
          <h2 className='text-black text-3xl md:text-4xl lg:text-6xl font-bold'>RAGU By Heyjong Community</h2>
        </div>
        <div className='mt-10'>
          <video width='100%' height='auto' controls muted playsInline preload='metadata' className='rounded-xl'>
            <source src='https://nineteeninnovation.my.id/hjc/videos/compro.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      <section className='container px-5 py-24 mx-auto'>
        <div className='text-center'>
          <p className={`uppercase text-primary text-base font-bold ${fraunces.className}`}>
            Heyjong Community In Action
          </p>
          <h2 className='text-black text-3xl md:text-4xl lg:text-6xl font-bold'>Yuk Kepoin Keseruannya!</h2>
        </div>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {listContentHJ.map((content) => (
            <div key={content.id} className=''>
              <video
                width='100%'
                height='auto'
                autoPlay
                muted
                playsInline
                loop
                preload='metadata'
                className='rounded-3xl'
              >
                <source src={`${content.url}`} type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </section>
      <section className='container px-5 py-24 mx-auto'>
        <div className='text-center'>
          <p className={`uppercase text-primary text-base font-bold ${fraunces.className}`}>#StayConnected</p>
          <h2 className='text-black text-3xl md:text-4xl lg:text-6xl font-bold'>
            Jangan Ketinggalan, Follow Sekarang!
          </h2>
        </div>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          <div className='flex items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600'>
            <div className='py-8'>
              <Image
                src={`/icons/ic-instagram.svg`}
                width={400}
                height={400}
                alt='instagram'
                className='size-20 mx-auto'
              />
              <Link href={`https://www.instagram.com/heyjong_community`} target='_blank' rel='noopener noreferrer'>
                <button className='mt-8 uppercase cursor-pointer font-bold text-xs md:text-sm lg:text-lg bg-white px-6 py-1 rounded-md '>
                  <span className='bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent'>
                    Selengkapnya
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className='flex items-center justify-center rounded-2xl bg-black'>
            <div className='py-8'>
              <Image src={`/icons/ic-tiktok.svg`} width={400} height={400} alt='tiktok' className='size-20 mx-auto' />
              <Link href={`https://www.tiktok.com/@heyjongcommunity`} target='_blank' rel='noopener noreferrer'>
                <button className='mt-8 uppercase cursor-pointer font-bold text-xs md:text-sm lg:text-lg bg-white px-6 py-1 rounded-md '>
                  <span className='bg-black bg-clip-text text-transparent'>Selengkapnya</span>
                </button>
              </Link>
            </div>
          </div>
          <div className='flex items-center justify-center rounded-2xl bg-[#FF0033]'>
            <div className='py-8'>
              <Image src={`/icons/ic-youtube.svg`} width={400} height={400} alt='discord' className='size-20 mx-auto' />
              <Link href={`#`} target='_blank' rel='noopener noreferrer'>
                <button className='mt-8 uppercase cursor-pointer font-bold text-xs md:text-sm lg:text-lg bg-white px-6 py-1 rounded-md '>
                  <span className='bg-[#FF0033] bg-clip-text text-transparent'>Selengkapnya</span>
                </button>
              </Link>
            </div>
          </div>
          <div className='flex items-center justify-center rounded-2xl bg-[#5865F2]'>
            <div className='py-8'>
              <Image src={`/icons/ic-discord.svg`} width={400} height={400} alt='discord' className='size-20 mx-auto' />
              <Link href={`https://discord.gg/VNW7EPM7`} target='_blank' rel='noopener noreferrer'>
                <button className='mt-8 uppercase cursor-pointer font-bold text-xs md:text-sm lg:text-lg bg-white px-6 py-1 rounded-md '>
                  <span className='bg-[#5865F2] bg-clip-text text-transparent'>Selengkapnya</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[url('/images/jongcamp.webp')] bg-cover bg-bottom">
        <div className='py-32 flex items-center justify-center bg-black/30'>
          <div className=''>
            <h1 className='uppercase text-white text-6xl text-center font-bold'>Ayo Bergabung Ke Heyjong Community!</h1>
            <div className='flex justify-center items-center gap-3'>
              <Link href={`https://heyjong.id/oprecMember`} target='_blank' rel='noopener noreferrer'>
                <button className='mt-6 uppercase cursor-pointer font-bold text-xs md:text-sm lg:text-lg bg-[#DF334D] text-white px-6 py-1 rounded-md '>
                  Gass Join
                </button>
              </Link>
              <Link href={`https://wa.me/62895328310378`} target='_blank' rel='noopener noreferrer'>
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
