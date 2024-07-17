import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dark-gradient': 'linear-gradient(rgba(72, 24, 120), rgba(0, 0, 0, 0))',
      },
      colors: {
        darkBg: 'var(--dark-gradient)',
      },
    },
  },
  plugins: [],
};

export default config;

