import { Fira_Sans, Dela_Gothic_One, Rubik as Rubik_Font } from 'next/font/google';

export const FiraSans = Fira_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const DelaGothicOne = Dela_Gothic_One({
  subsets: ['latin'],
  weight: ['400'],
});

export const Rubik = Rubik_Font({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});
