import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        // white: '#f0f8ff',
        // // text: '#ccd6f6',
        // text: '#b2bbd2',
        // subText: '#7b86a7',
        //
        // specialText: '#73fac9',
        //
        // primary: '#00c6bc',
        // background: '#020d1f',
        // // 'bg-light': '#2f384b',
        // 'bg-light': '#2a2c43',
        // tooltipColor: '#1b857f',
        // footerColor: '#2a2c43',
        white: 'var(--color-white)',
        text: 'var(--color-text)',
        subtext: 'var(--color-subtext)',
        'special-text': 'var(--color-special-text)',
        primary: 'var(--color-primary)',
        background: 'var(--color-background)',
        'bg-light': 'var(--color-bg-light)',
      },
      spacing: {
        std: '2rem',
      },
    },
  },
  plugins: [],
};
export default config;
