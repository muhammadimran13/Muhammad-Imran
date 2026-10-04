/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      colors: {
        purple: { DEFAULT: '#7c3aed', light: '#a855f7', lighter: '#c084fc' },
        blue: { DEFAULT: '#2563eb', light: '#3b82f6', lighter: '#60a5fa' },
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
        'blob': 'blobFloat 8s ease-in-out infinite',
        'float': 'floatUD 3s ease-in-out infinite',
        'pulse-dot': 'pulseDot 2s infinite',
        'marquee': 'marquee 20s linear infinite',
        'grad': 'gradShift 4s ease-in-out infinite',
      },
      keyframes: {
        blobFloat: { '0%,100%': { transform: 'scale(1) translate(0,0)' }, '50%': { transform: 'scale(1.1) translate(20px,-20px)' } },
        floatUD: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
        pulseDot: { '0%,100%': { boxShadow: '0 0 0 0 rgba(74,222,128,0.4)' }, '50%': { boxShadow: '0 0 0 6px rgba(74,222,128,0)' } },
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        gradShift: { '0%,100%': { backgroundPosition: '0%' }, '50%': { backgroundPosition: '100%' } },
      },
    },
  },
  plugins: [],
}
