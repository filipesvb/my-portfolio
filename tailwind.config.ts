import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],

  theme: {},
  plugins: [typography],
};

export default config;
