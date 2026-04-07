// 'use client';

// import ArticleCard from '@/components/molecules/ArticleCard';
// import ArticleCardSkeleton from '@/components/molecules/ArticleCardSkeleton';
// import { useArticles } from '@/hooks/article/useArticles';
import Link from 'next/link';
// import React, { useEffect } from 'react';

export default function ArticlePage() {
  // const { articles, loading, fetchArticles } = useArticles();

  // useEffect(() => {
  //   fetchArticles(1, 10);
  // }, [fetchArticles]);

  return (
    <div>
      {/* <section className="bg-[url('/images/jongcamp.webp')] bg-cover bg-center bg-fixed w-full h-screen">
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
              <button className='uppercase font-bold text-xs md:text-sm lg:text-base bg-[#DF334D] text-white px-6 py-1 rounded-md '>
                ABOUT US
              </button>
              <Link
                href={`https://heyjong.id/oprecMember`}
                target='_blank'
                rel='noopener noreferrer'
                className='uppercase font-bold text-xs md:text-sm lg:text-base bg-white text-black px-6 py-1 rounded-md '
              >
                JOIN US
              </Link>
            </div>
          </div>
        </div>
      </section> */}
      <section className="bg-[url('/images/jongcamp.webp')] bg-cover bg-center bg-fixed w-full h-screen">
        <div className='bg-black/50 h-full w-full px-5 md:px-0 flex items-center justify-center'>
          <div className='w-full md:w-3/4' data-aos='fade-up' data-aos-duration='1000'>
            <p className='text-xs md:text-sm lg:text-base text-white uppercase font-bold tracking-widest'>
              EXPLORE INSIGHTS FROM HEYJONG COMMUNITY
            </p>
            <h1 className='font-semibold text-4xl md:text-[40px] lg:text-[90px] lg:leading-24 text-white'>
              Ruang Literasi & <br /> Ide Tanpa Batas
            </h1>
            <p className={`mt-4 w-full lg:w-3/4 xl:w-1/2 font-medium text-sm md:text-base lg:text-lg text-white/90`}>
              Temukan kumpulan artikel inspiratif, tips konten digital, dan cerita aksi sosial para pemuda hebat. Mari
              bertumbuh bersama melalui wawasan yang menginspirasi perubahan.
            </p>
            <div className='mt-6 flex items-stretch gap-2.5'>
              <Link
                href={'#artikel'}
                className='uppercase font-bold text-xs md:text-sm lg:text-base bg-[#DF334D] text-white px-6 py-2 rounded-md transition-hover hover:bg-[#b5293e]'
              >
                Jelajahi Artikel
              </Link>
              <Link
                href={`https://heyjong.id/oprecMember`}
                target='_blank'
                rel='noopener noreferrer'
                className='uppercase font-bold text-xs md:text-sm lg:text-base bg-white text-black px-6 py-2 rounded-md flex items-center'
              >
                Gabung Komunitas
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id='artikel' className='px-5 py-24 flex items-center justify-center'>
        <div className='relative skew-12 flex'>
          {/* Stroke text: z-0 */}
          <h1 className='text-black absolute -bottom-1 -left-4 z-0 text-3xl font-black md:-bottom-2 md:-left-1 md:text-5xl lg:text-7xl'>
            COMING SOON
          </h1>

          {/* Main text: z-10 */}
          <h1 className='text-primary relative z-10 mt-2 -ml-3 text-3xl font-black md:ml-0 md:text-5xl lg:text-7xl'>
            COMING SOON
          </h1>
        </div>
      </section>
      {/* <section className='container mx-auto px-5 py-24'>
        <div className=''>
          <h1 className='uppercase text-4xl font-bold text-black'>Artikel</h1>
          <p className='text-sm md:text-base text-black'>
            Cerita, inspirasi, dan berbagai hal seru dari Heyjong Community
          </p>
        </div>
        {loading ? (
          <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8'>
            {Array.from({ length: 6 }).map((_, i) => (
              <ArticleCardSkeleton key={i} />
            ))}
          </div>
        ) : articles.length > 0 ? (
          <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8'>
            {articles.map((article, i) => (
              <ArticleCard
                key={i}
                imageUrl={article.thumbnail ?? ''}
                title={article.title}
                slug={article.slug}
                content={article.content}
                author={article.users.fullname}
                datePublish={article.published_date}
              />
            ))}
          </div>
        ) : (
          <div className='mt-16 text-center'>
            <p className='text-lg font-semibold text-gray-700'>Belum ada artikel</p>
            <p className='text-sm text-gray-400 mt-2'>Nantikan cerita dan kegiatan seru dari komunitas kami.</p>
          </div>
        )}
      </section> */}
    </div>
  );
}
