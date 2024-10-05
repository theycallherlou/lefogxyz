import localFont from 'next/font/local';
import { Barlow } from 'next/font/google';

const karla = localFont({
  src: '../fonts/Karla/Karla-VariableFont_wght.ttf',
  variable: '--font-karla'
});

const anaheim = localFont({
  src: '../fonts/Anaheim/Anaheim-VariableFont_wght.ttf',
  variable: '--font-anaheim'
});

const barlowLight = Barlow({
  subsets: ['latin'],
  weight: '300',
  style: 'normal'
});

const barlowLightItalic = Barlow({
  subsets: ['latin'],
  weight: '300',
  style: 'italic'
});

const barlowRegular = Barlow({
  subsets: ['latin'],
  weight: '400',
  style: 'normal'
});

const barlowRegularItalic = Barlow({
  subsets: ['latin'],
  weight: '400',
  style: 'italic'
});

const barlowMedium = Barlow({
  subsets: ['latin'],
  weight: '500',
  style: 'normal'
});

const barlowMediumItalic = Barlow({
  subsets: ['latin'],
  weight: '500',
  style: 'italic'
});

const barlowSemiBold = Barlow({
  subsets: ['latin'],
  weight: '600',
  style: 'normal'
});

const barlowSemiBoldItalic = Barlow({
  subsets: ['latin'],
  weight: '600',
  style: 'italic'
});

const barlowBold = Barlow({
  subsets: ['latin'],
  weight: '700',
  style: 'normal'
});

const barlowBoldItalic = Barlow({
  subsets: ['latin'],
  weight: '700',
  style: 'italic'
});

export {
  karla,
  anaheim,
  barlowLight,
  barlowLightItalic,
  barlowRegular,
  barlowRegularItalic,
  barlowMedium,
  barlowMediumItalic,
  barlowSemiBold,
  barlowSemiBoldItalic,
  barlowBold,
  barlowBoldItalic
};
