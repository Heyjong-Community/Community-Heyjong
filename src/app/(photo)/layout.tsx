import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '../globals.css';
import { Analytics } from '@vercel/analytics/next';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

// const barlowCondensed = Barlow_Condensed({
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
//   style: ['normal', 'italic'],
//   subsets: ['latin'],
// });

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

export default function PhotoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' type='image/png' href='/images/logo-color.png' />
      </head>
      <body className={`${poppins.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
