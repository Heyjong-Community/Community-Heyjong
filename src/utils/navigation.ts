export interface MenuItem {
  nama: string;
  link: string;
  subMenu?: MenuItem[];
}

export const daftarMenu: MenuItem[] = [
  { nama: 'Beranda', link: '/' },
  { nama: 'Tentang Kami', link: '/tentang-kami' },
  { nama: 'Kegiatan', link: '/kegiatan' },
  { nama: 'Kontak', link: '/kontak' },
];
