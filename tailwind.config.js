/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'h1': ['48px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '800' }],
        'h2': ['36px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h3': ['28px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'button': ['14px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '500' }],
      },
      fontWeight: {
        'light': '300',
        'regular': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
        'black': '900',
      },
      colors: {
        brand: {
          purple: '#a434f2',
          'purple-hover': '#8b2bc7',
          'purple-light': 'rgba(164, 52, 242, 0.1)',
          'purple-medium': 'rgba(164, 52, 242, 0.2)',
          black: '#000000',
          white: '#ffffff',
        },
      },
      animation: {
        'moveDots': 'moveDots 10s linear infinite',
        'purplePulse': 'purplePulse 2s infinite',
        'fadeIn': 'fadeIn 0.6s ease-out',
        'slideUp': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        moveDots: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '20px 20px' },
        },
        purplePulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(164, 52, 242, 0.4)' },
          '50%': { boxShadow: '0 0 0 10px rgba(164, 52, 242, 0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'purple-sm': '0 1px 2px rgba(164, 52, 242, 0.1)',
        'purple-md': '0 4px 6px rgba(164, 52, 242, 0.1)',
        'purple-lg': '0 10px 15px rgba(164, 52, 242, 0.1)',
        'purple-xl': '0 20px 25px rgba(164, 52, 242, 0.1)',
      },
    },
  },
  plugins: [],
};