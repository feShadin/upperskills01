/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'space-grotesk': ['"Space Grotesk"', 'system-ui', '-apple-system', 'sans-serif'],
        'sans': ['"Space Grotesk"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'h1': ['48px', { lineHeight: '1.2', letterSpacing: '0.5px', fontWeight: '700' }],
        'h2': ['36px', { lineHeight: '1.2', letterSpacing: '0.5px', fontWeight: '700' }],
        'h3': ['28px', { lineHeight: '1.2', letterSpacing: '0.5px', fontWeight: '500' }],
        'body': ['18px', { lineHeight: '1.5', fontWeight: '400' }],
        'button': ['16px', { lineHeight: '1.2', letterSpacing: '0.5px', fontWeight: '600' }],
      },
      fontWeight: {
        'regular': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },
      colors: {
        primary: {
          purple: '#a434f2',
          'purple-hover': '#8b2bc7',
        },
        purple: {
          DEFAULT: '#a434f2',
          hover: '#8b2bc7',
          light: 'rgba(164, 52, 242, 0.1)',
          medium: 'rgba(164, 52, 242, 0.3)',
        },
        black: {
          DEFAULT: '#000000',
          light: 'rgba(0, 0, 0, 0.1)',
          medium: 'rgba(0, 0, 0, 0.3)',
        },
        white: {
          DEFAULT: '#ffffff',
        }
      },
      perspective: {
        '1000': '1000px',
        '2000': '2000px',
      },
      animation: {
        'matrix-rain': 'matrix-rain 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-reverse': 'float-reverse 7s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'gradient-shift': 'gradient-shift 8s ease-in-out infinite',
        'particle-float': 'particle-float 6s ease-in-out infinite',
        'tilt': 'tilt 10s ease-in-out infinite',
        'float-3d': 'float-3d 8s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 20s linear infinite',
      },
      keyframes: {
        'matrix-rain': {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(20px)' },
        },
        'float-3d': {
          '0%, 100%': { 
            transform: 'translateY(0px) rotateX(0deg) rotateY(0deg)' 
          },
          '25%': { 
            transform: 'translateY(-10px) rotateX(5deg) rotateY(5deg)' 
          },
          '50%': { 
            transform: 'translateY(-20px) rotateX(0deg) rotateY(10deg)' 
          },
          '75%': { 
            transform: 'translateY(-10px) rotateX(-5deg) rotateY(5deg)' 
          },
        },
        'tilt': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(1deg)' },
          '75%': { transform: 'rotate(-1deg)' },
        },
        'rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'glow': {
          '0%': { boxShadow: '0 0 5px #3b82f6, 0 0 10px #3b82f6' },
          '100%': { boxShadow: '0 0 10px #3b82f6, 0 0 20px #3b82f6, 0 0 30px #3b82f6' },
        },
        'gradient-shift': {
          '0%, 100%': { 
            backgroundPosition: '0% 50%' 
          },
          '50%': { 
            backgroundPosition: '100% 50%' 
          },
        },
        'particle-float': {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg)' 
          },
          '33%': { 
            transform: 'translateY(-10px) rotate(120deg)' 
          },
          '66%': { 
            transform: 'translateY(5px) rotate(240deg)' 
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
    },
  },
  plugins: [],
};