import localFont from 'next/font/local';
import { Barlow } from 'next/font/google';

const karla = localFont({
  src: '../fonts/Karla/Karla-VariableFont_wght.ttf',
  variable: '--font-karla'
});

const barlowLight = Barlow({
  subsets: ['latin'],
  weight: '300',
  style: 'normal'
});

const barlowRegular = Barlow({
  subsets: ['latin'],
  weight: '400',
  style: 'normal'
});

const barlowItalic = Barlow({
  subsets: ['latin'],
  weight: '400',
  style: 'italic'
});

const barlowMedium = Barlow({
  subsets: ['latin'],
  weight: '500',
  style: 'normal'
});

const barlowSemiBold = Barlow({
  subsets: ['latin'],
  weight: '600',
  style: 'normal'
});

export {
  karla,
  barlowLight,
  barlowRegular,
  barlowItalic,
  barlowMedium,
  barlowSemiBold
};
