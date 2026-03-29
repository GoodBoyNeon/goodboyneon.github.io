import {
  Comic_Neue,
  Dela_Gothic_One,
  Fira_Sans,
  Great_Vibes,
  IBM_Plex_Serif,
  JetBrains_Mono,
  Lobster,
  Noto_Sans,
  Pacifico,
  Rubik,
  Titan_One,
} from "next/font/google";

export const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
export const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const delaGothicOne = Dela_Gothic_One({
  subsets: ["latin"],
  weight: ["400"],
});

export const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

export const rubik = Rubik({
  subsets: ["latin"],
});

export const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
});

export const comic = Comic_Neue({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const titanOne = Titan_One({
  subsets: ["latin"],
  weight: ["400"],
});
export const lobster = Lobster({
  subsets: ["latin"],
  weight: ["400"],
});

export const serif = IBM_Plex_Serif({
  weight: ["400", "500"],
  subsets: ["latin"],
});
