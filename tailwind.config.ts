import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'wallet-gradient': 'linear-gradient(to right, #021b79, #0575e6)',
      },
      colors: {
        background: "#000719",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
