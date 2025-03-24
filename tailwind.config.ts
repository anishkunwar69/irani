import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        playfair: ['var(--font-playfair-display)'],
        quicksand: ['var(--font-quicksand)'],
        lora: ['var(--font-lora)'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out infinite 3s',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        
        'hero-xs': '380px',
        'hero-sm': '580px',
        'hero-md': '820px',
        'hero-lg': '1140px',
        'hero-xl': '1400px',
        'hero-2lg': '1384px',
        
        'xxl': '1684px',
        '3xl': '1550px',
        '6xl': '1800px',
        'gallery-5xl':'2054px',
        
      },
    },
  },
  plugins: [],
} satisfies Config;
