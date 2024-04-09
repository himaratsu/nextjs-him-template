import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '2rem',
        sm: '4rem',
        lg: '4rem',
        xl: '12rem',
        '2xl': '12rem',
      },
    },
  },
  plugins: [],
};
export default config;
