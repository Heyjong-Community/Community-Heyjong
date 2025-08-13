import type { Metadata } from 'next';
import { Barlow_Condensed } from 'next/font/google';
import '../globals.css';
import { Analytics } from '@vercel/analytics/next';
import Image from 'next/image';

const barlowCondensed = Barlow_Condensed({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Heyjong Community',
  description: "Heyjong Community | Let's Grow Together & Spread Good Vibes",
  keywords: ['heyjong', 'heyjong community', 'komunitas heyjong'],
  openGraph: {
    title: 'Heyjong Community',
    description: '',
    url: 'https://community.heyjong.id/',
    siteName: 'Heyjong Community',
    locale: 'id_ID',
    type: 'website',
  },
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' type='image/png' href='/images/logo-color.png' />
      </head>
      <body className={`${barlowCondensed.className} relative antialiased`}>
        <div className='absolute z-0 top-10 left-1/2 -translate-1/2 flex items-center'>
          <Image
            src='/images/logo-color.png'
            width={300}
            height={300}
            alt='logo'
            className='size-16 md:size-16 lg:size-20'
          />
          <h2 className='text-xl font-semibold text-white leading-5'>
            HEYJONG <br /> COMMUNITY
          </h2>
        </div>
        {children}
        <footer className='absolute z-0 bottom-5 text-white text-center font-medium left-1/2 -translate-1/2'>
          &copy; 2025.Heyjong Community. All Rights Reserved
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
