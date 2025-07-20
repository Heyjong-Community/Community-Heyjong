'use client';

import { fraunces } from '@/utils/fonts';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function AboutUspage() {
  useEffect(() => {
    AOS.init({
      delay: 100,
    });
  }, []);
  return (
    <div>
      <section className="bg-[url('/images/jongcamp.webp')] bg-cover bg-center bg-fixed w-full h-screen">
        <div className='bg-black/30 h-full w-full px-5 md:px-0 flex items-center justify-center'>
          <div className='w-full md:w-3/4' data-aos='fade-up' data-aos-duration='1000'>
            <p className='text-xs md:text-sm lg:text-base text-white uppercase font-bold'>TENTANG HEYJONG COMMUNITY</p>
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
              <Link href={`#story`}>
                <button className='uppercase cursor-pointer font-bold text-xs md:text-sm lg:text-base bg-[#DF334D] text-white px-6 py-1 rounded-md '>
                  Selengkapnya
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id='story' className='px-5 py-24'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className=''>
            <Image
              src={`/images/fotbar.webp`}
              width={700}
              height={350}
              alt='jongers'
              className='rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/50'
            />
          </div>
          <div className=''>
            <p className={`uppercase text-primary text-base font-bold ${fraunces.className}`}>Tentang Kami</p>
            <h2 className='text-3xl md:text-4xl lg:text-6xl font-bold text-black'>Perjalanan Kami</h2>
            <p className={`mt-6 text-black text-base lg:text-lg font-semibold ${fraunces.className}`}>
              Berawal dari perkumpulan anak muda yang memiliki keresahan atas potensi yang dimiliki tidak berkembang dan
              karakter yang belum sesuai harapan. Dari situ, lahirlah gagasan untuk membentuk perkumpulan yang memiliki
              dasar, keterikatan, serta tujuan yang satu. Satu per satu potensi dalam diri muncul dan dapat
              dikembangkan, hingga akhirnya terbuka luas bagi pemuda/pemudi lainnya yang ingin bergabung. Bersama dengan
              Heyjong, dibentuklah komunitas bernama Heyjong Community di akhir tahun 2024, dengan slogan
              &quot;Let&apos;s Grow Together And Spread Good Vibes&quot;
            </p>
          </div>
        </div>
      </section>
      <section className='bg-[url(/images/about2.JPG)] w-full bg-cover bg-bottom bg-no-repeat'>
        <div className='bg-linear-to-l from-black via-black/50 to-transparent w-full h-full px-5 py-24'>
          <div className='container mx-auto grid grid-cols-1 md:grid-cols-2'>
            <div className=''></div>
            <div className='p-5'>
              <p className={`uppercase text-white text-base font-bold ${fraunces.className}`}>Visi Kami</p>
              <h2 className='text-3xl md:text-4xl lg:text-6xl font-bold text-white'>Dari Potensi Ke Aksi</h2>
              <p className={`mt-6 text-white text-base lg:text-lg font-semibold ${fraunces.className}`}>
                Menjadi wadah terdepan dalam membangun potensi dan karakter generasi muda penebar kebaikan yang
                berlandaskan nilai-nilai islam.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='px-5 py-24'>
        <div className='text-center'>
          <p className={`uppercase text-primary text-base font-bold ${fraunces.className}`}>Misi Kami</p>
          <h2 className='text-black text-3xl md:text-4xl lg:text-6xl font-bold'>Kreator Kritis, Aktif, Berdampak</h2>
        </div>
        <div className='xl:container mx-auto grid grid-cols-1 md:grid-cols-4'>
          <div className='p-1.5 lg:p-2 xl:p-3.5'>
            <Image
              src={`/icons/handshake.svg`}
              width={50}
              height={50}
              alt='icon'
              className='my-6 size-12 text-primary'
            />
            <div className=''>
              <h5 className='text-lg md:text-2xl lg:text-3xl font-semibold text-black'>Ekosistem</h5>
              <p className={`text-base lg:text-lg text-black ${fraunces.className}`}>
                Membentuk lingkungan yang saling mendukung untuk tumbuh bersama.
              </p>
            </div>
          </div>
          <div className='p-1.5 lg:p-2 xl:p-3.5'>
            <Image src={`/icons/brain.svg`} width={50} height={50} alt='icon' className='my-6 size-12 text-primary' />
            <div className=''>
              <h5 className='text-lg md:text-2xl lg:text-3xl font-semibold text-black'>Kritis</h5>
              <p className={`text-base lg:text-lg text-black ${fraunces.className}`}>
                To welcome dreamers, doers, and storytellers, giving them a place with us.
              </p>
            </div>
          </div>
          <div className='p-1.5 lg:p-2 xl:p-3.5'>
            <Image src={`/icons/active.svg`} width={50} height={50} alt='icon' className='my-6 size-12 text-primary' />
            <div className=''>
              <h5 className='text-lg md:text-2xl lg:text-3xl font-semibold text-black'>Aktif</h5>
              <p className={`text-base lg:text-lg text-black ${fraunces.className}`}>
                To welcome dreamers, doers, and storytellers, giving them a place with us.
              </p>
            </div>
          </div>
          <div className='p-1.5 lg:p-2 xl:p-3.5'>
            <Image src={`/icons/target.svg`} width={50} height={50} alt='icon' className='my-6 size-12 text-primary' />
            <div className=''>
              <h5 className='text-lg md:text-2xl lg:text-3xl font-semibold text-black'>Berdampak</h5>
              <p className={`text-base lg:text-lg text-black ${fraunces.className}`}>
                To welcome dreamers, doers, and storytellers, giving them a place with us.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='px-5 py-24 bg-[#FEF1A5]'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='flex items-center py-5'>
            <div className=''>
              <h2 className={`text-lg md:text-xl lg:text-2xl font-bold`}>HEYJONG COMMUNITY</h2>
              <h2 className='font-bold text-4xl lg:text-6xl text-primary'>#LetsSpreadGoodVibes</h2>
            </div>
          </div>
          <div className='py-5'>
            <p className={`uppercase text-primary text-base font-bold ${fraunces.className}`}>Kode Etik</p>
            <h2 className='text-3xl md:text-4xl lg:text-6xl font-bold text-black'>
              <span className='underline decoration-primary'>FAST</span> WITH PURPOSE
            </h2>
            <div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='border-2 border-primary rounded-lg p-4'>
                <h4 className='text-primary text-xl md:text-2xl lg:text-3xl font-bold'>Fathanah</h4>
                <p className={`${fraunces.className}`}>Responsif, Adaptif, dan Kreatif.</p>
              </div>
              <div className='border-2 border-primary rounded-lg p-4'>
                <h4 className='text-primary text-xl md:text-2xl lg:text-3xl font-bold'>Amanah</h4>
                <p className={`${fraunces.className}`}>Bertanggung jawab dalam menjalankan tugas.</p>
              </div>
              <div className='border-2 border-primary rounded-lg p-4'>
                <h4 className='text-primary text-xl md:text-2xl lg:text-3xl font-bold'>Shidiq</h4>
                <p className={`${fraunces.className}`}>Selaras antara pemikiran, keyakinan, ucapan, dan perbuatan.</p>
              </div>
              <div className='border-2 border-primary rounded-lg p-4'>
                <h4 className='text-primary text-xl md:text-2xl lg:text-3xl font-bold'>Tabligh</h4>
                <p className={`${fraunces.className}`}>
                  Saling mengingatkan dalam kebaikan dan menjunjung tinggi persaudaraan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='px-5 py-24'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className=''>
            <p className={`uppercase text-primary text-base font-bold ${fraunces.className}`}>JONGERS</p>
            <h2 className='text-3xl md:text-4xl lg:text-6xl font-bold text-black'>Let&apos;s Join With Us</h2>
            <p className={`mt-6 text-black text-base lg:text-lg font-semibold ${fraunces.className}`}>
              Hai! Nih <span className='font-bold text-primary'>Jongers</span> yang bikin komunitas ini jadi keren abis.
              Bukan cuma nama di daftar, tapi kita beneran orang-orang yang semangatnya pol-polan, punya visi yang sama,
              dan bikin kita semua ngerasa kayak keluarga. Solidaritas dan positive vibes yang kita punya itu jadi
              fondasi buat terus berkarya, belajar, dan grow bareng.
            </p>
            <Link href={`/tentang-kami/jongers`}>
              <button className='mt-6 uppercase cursor-pointer font-bold text-xs md:text-sm lg:text-lg bg-[#DF334D] text-white px-6 py-1 rounded-md '>
                Lihat Jongers
              </button>
            </Link>
          </div>
          <div className=''>
            <Image
              src={`/images/jongcamp.webp`}
              width={700}
              height={350}
              alt='jongers'
              className='rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/50'
            />
          </div>
        </div>
      </section>
    </div>
  );
}
