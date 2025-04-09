/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#030711',
        foreground: '#FFFFFF',
        primary: {
          DEFAULT: '#2563EB',
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#1F2937',
          foreground: '#9CA3AF',
        },
        card: {
          DEFAULT: '#111827',
          foreground: '#FFFFFF',
        },
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
        'slide-up': 'slide-up 0.5s ease-out',
      },
    },
  },
  plugins: [],
};