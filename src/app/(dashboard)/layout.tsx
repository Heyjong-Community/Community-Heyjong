import type { Metadata } from 'next';
import { Barlow_Condensed } from 'next/font/google';
import '../globals.css';
import Sidebar from '@/components/organism/Sidebar';
import NavDash from '@/components/organism/NavDash';
import { Toaster } from 'sonner';
import '@mantine/tiptap/styles.css';

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

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' type='image/png' href='/images/logo-color.png' />
      </head>
      <body className={`${barlowCondensed.className} antialiased flex flex-row items-start flex-nowrap`}>
        <Sidebar />
        <main className='grow w-full overflow-y-auto h-screen'>
          <NavDash />
          {children}
        </main>
        <Toaster richColors position='bottom-right' />
      </body>
    </html>
  );
}
