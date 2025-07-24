type ContentHJType = {
  url: string;
  title: string;
  description?: string;
};

type ListContentHJType = {
  id: number;
  url: string;
  title: string;
  description?: string;
};

export const contentHJ: ContentHJType[] = [
  {
    url: 'https://nineteeninnovation.my.id/hjc/videos/funtastic.mp4',
    title: 'Funtastic',
    description: '',
  },
  {
    url: 'https://nineteeninnovation.my.id/hjc/videos/milik-allah.mp4',
    title: 'Milik Allah',
    description: '',
  },
  {
    url: 'https://nineteeninnovation.my.id/hjc/videos/kajian-talkshow.mp4',
    title: '#IndonesiaGelap Mari Nyalakan Cahaya',
    description: '',
  },
  {
    url: 'https://nineteeninnovation.my.id/hjc/videos/jong-camp.mp4',
    title: 'Jong Camp',
    description: '',
  },
];

export const listContentHJ: ListContentHJType[] = contentHJ.map((item, index) => ({
  id: index + 1,
  ...item,
}));
