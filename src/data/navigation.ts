export type NavigationItem = {
  label: string;
  path: string;
  pageTitle?: string;
  description?: string;
};

export const primaryNavigation: NavigationItem[] = [
  { label: 'Beranda', path: '/' },
  {
    label: 'Tentang',
    path: '/tentang',
    pageTitle: 'Tentang',
    description: 'Halaman kosong untuk profil yayasan, visi misi, sejarah, tim inti, dan nilai organisasi.',
  },
  {
    label: 'Program',
    path: '/program',
    pageTitle: 'Program',
    description: 'Halaman kosong untuk daftar program, detail program, fokus area, dan capaian program.',
  },
  {
    label: 'Kegiatan',
    path: '/kegiatan',
    pageTitle: 'Kegiatan',
    description: 'Halaman kosong untuk kegiatan terbaru, arsip kegiatan, agenda lapangan, dan dokumentasi aktivitas.',
  },
  {
    label: 'Galeri',
    path: '/galeri',
    pageTitle: 'Galeri',
    description: 'Halaman kosong untuk galeri foto, video, dokumentasi lapangan, dan cerita visual yayasan.',
  },
  {
    label: 'Blog',
    path: '/blog',
    pageTitle: 'Blog',
    description: 'Halaman kosong untuk artikel, berita yayasan, publikasi, dan pembaruan informasi.',
  },
  {
    label: 'Kontak',
    path: '/kontak',
    pageTitle: 'Kontak',
    description: 'Halaman kosong untuk alamat, peta lokasi, formulir kontak, email, dan nomor yang bisa dihubungi.',
  },
];

export const joinUsRoute: NavigationItem = {
  label: 'Join Us',
  path: '/join-us',
  pageTitle: 'Join Us',
  description: 'Halaman kosong untuk volunteer, donatur, kolaborasi mitra, dan formulir pendaftaran.',
};
