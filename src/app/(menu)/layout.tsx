import Footer from '@/components/organism/Footer';
import Navbar from '@/components/organism/Navbar';
import { poppins } from '@/utils/fonts';
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import '../globals.css';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' type='image/png' href='/images/logo-color.png' />
      </head>
      {/* <body className={`${barlowCondensed.className} antialiased`}> */}
      <body className={`${poppins.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
