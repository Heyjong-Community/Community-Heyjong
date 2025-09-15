export interface MenuItem {
  nama: string;
  link: string;
  subMenu?: MenuItem[];
}

export const daftarMenu: MenuItem[] = [
  { nama: 'Beranda', link: '/' },
  { nama: 'Tentang Kami', link: '/tentang-kami' },
  { nama: 'Kegiatan', link: '/kegiatan' },
  { nama: 'Blog', link: '/blog' },
  { nama: 'Kontak', link: '/kontak' },
];
