import { formatDate } from '@/helpers/formatDate';
import { stripHtml } from '@/helpers/stripHtml';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import 'react-quill-new/dist/quill.snow.css';

interface ArticleCardProps {
  imageUrl: string | File;
  title: string;
  slug: string;
  content: string;
  datePublish: string;
  author: string;
}

export default function ArticleCard({ imageUrl, title, slug, author, content, datePublish }: ArticleCardProps) {
  const getImageUrl = (url: string) => {
    if (url.startsWith('http')) {
      return '/images/article.png';
      //   return url;
    }

    return `http://localhost:5000${url}`;
  };

  const sourceImage = imageUrl ? getImageUrl(imageUrl as string) : '/images/article.png';
  console.log(`detail link gambar = ${sourceImage}`);

  return (
    <div className='flex flex-col'>
      <div className=''>
        <Image src={sourceImage} width={500} height={400} alt='article' className='w-full h-72 object-cover' />
      </div>
      <div className='bg-gray-50 py-8 px-4 flex flex-col flex-1'>
        <div className='flex-1'>
          <Link href={`/article/${slug}`} className='group'>
            <h3 className='text-black font-semibold text-xl md:text-2xl group-hover:text-primary transition-all duration-200'>
              {title}
            </h3>
          </Link>
          <p className='mt-2 text-gray-600 text-sm md:text-base line-clamp-2'>{stripHtml(content)}</p>
        </div>
        <div className='mt-8 flex items-center gap-2'>
          <p className='text-gray-500 text-xs md:text-sm'>{author}</p>
          <p className='text-gray-500'>|</p>
          <p className='text-gray-500 text-xs md:text-sm'>{formatDate(datePublish)}</p>
        </div>
      </div>
    </div>
  );
}
