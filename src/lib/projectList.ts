import { Project } from './types/projectTypes';

export const majorProjects: Project[] = [
  {
    name: 'Cheekuneo',
    description:
      "Cheeka (aka Cheekuneo) is a Discord Bot I develop for IGP's Discord Server. It's a team-project, but I've put in remarkable efforts into the codebase!",
    githubUrl: 'https://github.com/ImagineGamingPlay/Cheeka-Development',
    image: './projectImages/cheekuneo.png',
    tags: ['Discord.js', 'TypeScript'],
  },
  {
    name: 'Console Wizard',
    description:
      "A minimal yet colorful and customizable alternative to javascript's default logger. A vibrant npm package amplifying logging experiences with colorful info, success, warn, and error messages, complete with timestamps and status indicators. Bonus point, you can also print tables pretty easily using Console Wizard!",
    tags: ['npm', 'TypeScript'],
    githubUrl: 'https://github.com/goodboyneon/console-wizard',
    image: './projectImages/console-wizard.png',
    url: 'https://npmjs.com/package/console-wizard',
  },
];
export const minorProjects: Project[] = [
  {
    name: 'VimSnake',
    description:
      'A snake game where you move using the vim motions (i.e. h, j, k and l). I made it within two days, with very low level graphics. (You can enable arrows keys too, if you just want to have fun without knowing vim bindings!)',
    tags: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/goodboyneon/vimSnake',
    url: 'https://neon.is-a.dev/vimSnake',
  },
  {
    name: 'Portfolio v1',
    description:
      'The first version of my portfolio, which I made around April, 2022. It includes all the basics, but the overall design was not something to be very proud of... It was also my take on reviewing Astro (the framework), which had just hit version 1.0 around the same time!',
    tags: ['Astro', 'TypeScript'],
    url: 'https://v1.neon.is-a.dev',
    githubUrl: 'https://github.com/goodboyneon/v1',
  },

  {
    name: 'password-generator',
    description:
      'A simple algorithm to generate random, customizable passwords, wrapped with a minimalist frontend.',
    tags: ['HTML', 'Css', 'JavaScript'],
    githubUrl: 'https://github.com/goodboyneon/password-generator',
    url: 'https://neon.is-a.dev/password-generator',
  },
  {
    name: 'Neobot',
    description:
      "Neobot is a Discord Bot. well.. I claim it's an actual bot, but it's more like a template, with the basic handlers all setup in typescript. It was one of my first Typescript projects, so I do have a lot of good memories connected with it!",
    githubUrl: 'https://github.com/goodboyneon/neobot',
    tags: ['Discord.js', 'TypeScript'],
  },
];
