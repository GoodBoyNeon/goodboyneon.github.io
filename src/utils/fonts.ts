import {
  Fira_Sans,
  Dela_Gothic_One,
  JetBrains_Mono,
  Rubik as Rubik_Font,
} from 'next/font/google';

export const FiraSans = Fira_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  preload: false,
});

export const DelaGothicOne = Dela_Gothic_One({
  subsets: ['latin'],
  weight: ['400'],
  preload: false,
});

export const JetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400'],
  preload: false,
});

export const Rubik = Rubik_Font({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  preload: false,
});
