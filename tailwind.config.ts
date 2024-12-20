import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': 'var(--primary-color)',
      },
      ringColor: {
        'primary-color': 'var(--primary-color)',
      }
    },
  },
  plugins: [],
};
export default config;
