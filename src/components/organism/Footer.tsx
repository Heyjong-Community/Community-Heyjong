import { daftarMenu } from '@/utils/navigation';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
  return (
    <>
      <footer className='bg-[#1e2023] py-24 px-6 lg:px-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6 lg:w-3/4 mx-auto'>
          <div className=''>
            <p className='font-extrabold text-white text-xl uppercase'>Contact</p>
            <div className={`mt-3`}>
              <p className='text-white text-base tracking-tight'>
                Jl. RS. Fatmawati Raya No.2, RT.2/RW.7, Pd. Labu, West Cilandak, Kota Jakarta Selatan, Daerah Khusus
                Ibukota Jakarta 12450
              </p>
              <p className='text-white text-base tracking-tight'>0895-3283-10378 (Kak Dieni)</p>
              <p className='text-white text-base tracking-tight'>heyjongcommunity@gmail.com</p>
            </div>
          </div>
          <div className=''>
            <p className='font-extrabold text-white text-xl uppercase'>Community</p>
            <div className={`mt-3`}>
              {daftarMenu.map((menu, i) => (
                <Link href={menu.link} key={i}>
                  <p className='text-white text-base tracking-tight hover:text-primary transition-all duration-200'>
                    {menu.nama}
                  </p>
                </Link>
              ))}
              <Link href={`/login`}>
                <p className='text-white text-base tracking-tight hover:text-primary transition-all duration-200'>
                  Dashboard Jongers
                </p>
              </Link>
            </div>
          </div>
          <div className=''>
            <p className='font-extrabold text-white text-xl uppercase'>Kegiatan</p>
            <div className={`mt-3`}>
              <p className='text-white text-base tracking-tight'>Seminar</p>
              <p className='text-white text-base tracking-tight'>Impact</p>
              <p className='text-white text-base tracking-tight'>Charity</p>
              <p className='text-white text-base tracking-tight'>Ngonten</p>
              <p className='text-white text-base tracking-tight'>Kajian & Talkshow</p>
            </div>
          </div>
          <div className=''>
            <p className='font-extrabold text-white text-xl uppercase'>Social Media</p>
            <div className={`mt-3 flex items-center gap-3`}>
              <SocialIcon
                url='https://www.instagram.com/heyjong_community'
                style={{ height: 40, width: 40 }}
                target='_blank'
                rel='noopener noreferrer'
              />
              <SocialIcon
                url='https://www.tiktok.com/@heyjongcommunity'
                style={{ height: 40, width: 40 }}
                target='_blank'
                rel='noopener noreferrer'
              />
              <SocialIcon
                url='https://www.youtube.com/@HJCPro'
                style={{ height: 40, width: 40 }}
                target='_blank'
                rel='noopener noreferrer'
              />
            </div>
          </div>
        </div>
      </footer>
      <div className='bg-black py-6'>
        <div className='w-3/4 mx-auto'>
          <p className='text-white uppercase font-bold'>
            COPYRIGHT &copy; 2025 - HEYJONG COMMUNITY | ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </>
  );
}
