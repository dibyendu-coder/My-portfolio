/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'Sora', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        cyber: {
          dark: '#05070d',
          darker: '#020408',
          card: 'rgba(13, 19, 33, 0.7)',
          border: 'rgba(255, 255, 255, 0.08)',
          cyan: '#00f5ff',
          neonCyan: '#0df',
          violet: '#8b5cf6',
          pink: '#ec4899',
          amber: '#f59e0b',
          emerald: '#10b981',
        },
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'matrix': 'matrix 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'blur(20px)' },
          '100%': { opacity: '0.8', filter: 'blur(35px)' },
        },
      },
    },
  },
  plugins: [],
};
