import { Project } from './types/projectTypes';

export const majorProjects: Project[] = [
  {
    name: 'Sprofile',
    description: "Blazingly fast TUI application for viewing your Spotify listening activity. Sprofile is written in rust. It includes a authorization backend, and a frontend TUI written using the ratatui library.",
    tags: ['rust', 'tui', 'spotify'],
    githubUrl: 'https://github.com/goodboyneon/sprofile',
    image: './projectImages/sprofile.png'
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
  {
    name: 'Byte',
    description:
      'Byte is a public Discord Bot, which provides moderation commands and features, games, utility commands, suggestion system and much more, all with the freedom of customizability. The bot was given to me by a friend (thanks, vector!), and I develop it ever since. Add it to your server with the button below!',
    image: './projectImages/byte.png',
    githubUrl: 'https://github.com/goodboyneon/byte',
    url: 'https://discord.com/application-directory/933839241962729562',
    tags: ['Discord.js', 'TypeScript'],
  },
  {
    name: 'Cheekuneo',
    description:
      "Cheeka (aka Cheekuneo) is a Discord Bot I develop for IGP's Discord Server. It's a team-project, but I've put in remarkable efforts into the codebase!",
    githubUrl: 'https://github.com/ImagineGamingPlay/Cheeka-Development',
    image: './projectImages/cheekuneo.png',
    tags: ['Discord.js', 'TypeScript'],
  },
  {
    name: 'tictactoe',
    description: 'A tictactoe bot written in C++ with CUI interface. It uses the minimax algorithm to determine the best move in any given position, ensuring it never loses from an equal position, all wrapped in a ncurses CUI.',
    githubUrl: 'https://github.com/goodboyneon/tictactoe',
    image: './projectImages/tictactoe.png',
    tags: ['tic-tac-toe', 'cpp', 'minimax', 'CUI'],
  }
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
    name: 'dprofile',
    description: "A website that shows your discord profile just like the user profile tab in Discord. My original idea was to provide an API or a npm package, to make it easy to integrate your discord profile in your own websites, in a fancy way. But well, I just lost motivation to continue it... The project is still functional though, allowing you to check out your profile, although I don't know why you wouldn't just use discord itself for that..",
    tags: ['discord-profile', 'nextjs'],
    githubUrl: 'https://github.com/goodboyneon/dprofile',
  },
  {
    name: 'Print Wizard',
    description: "A python port of my npm package, console-wizard. It provides all the features of console-wizard, but in a python codebase. Try it using pip install printwizard",
    url: 'https://pypi.org/project/printwizard/',
    githubUrl: 'https://github.com/goodboyneon/printwizard',
    tags: ['python', 'pypi']
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
    name: 'Neobot',
    description:
      "Neobot is a Discord Bot. well.. I claim it's an actual bot, but it's more like a template, with the basic handlers all setup in typescript. It was one of my first Typescript projects, so I do have a lot of good memories connected with it!",
    githubUrl: 'https://github.com/goodboyneon/neobot',
    tags: ['Discord.js', 'TypeScript'],
  },
  {
    name: 'password-generator',
    description:
      'A simple algorithm to generate random, customizable passwords, wrapped with a minimalist frontend.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/goodboyneon/password-generator',
    url: 'https://neon.is-a.dev/password-generator',
  },
];
