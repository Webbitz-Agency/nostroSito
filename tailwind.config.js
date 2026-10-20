/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Palette Webbitz: #181818, #e85002, #ede6dd, #797979, #000000, #ffffff, #c6ad96 */
        primary: {
          50: '#ede6dd',
          100: '#ede6dd',
          200: '#c6ad96',
          300: '#e85002',
          400: '#e85002',
          500: '#e85002',
          600: '#f26a1f',
          700: '#b83d00',
          800: '#181818',
          900: '#181818',
        },
        accent: {
          50: '#ede6dd',
          100: '#ede6dd',
          200: '#c6ad96',
          300: '#c6ad96',
          400: '#c6ad96',
          500: '#e85002',
          600: '#e85002',
          700: '#b83d00',
          800: '#181818',
          900: '#000000',
        },
        gray: {
          50: '#ffffff',
          100: '#ede6dd',
          200: '#ede6dd',
          300: '#ede6dd',
          400: '#c6ad96',
          500: '#797979',
          600: '#5a5a5a',
          700: '#242220',
          800: '#242220',
          900: '#181818',
        },
        red: { 500: '#d93a3a', 600: '#b32626' },
        green: { 500: '#3aa76d', 600: '#1f7a4d' },
      },
      fontFamily: {
        'sans': ['Manrope', 'system-ui', 'sans-serif'],
        'display': ['Unbounded', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(232, 80, 2, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(232, 80, 2, 0.6)' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'gradient-y': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center bottom'
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '400% 400%',
            'background-position': 'right center'
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #E85002 0%, #E85002 100%)',
        'gradient-branding': 'linear-gradient(135deg, #C6AD96 0%, #E85002 50%, #181818 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #EDE6DD 0%, #C6AD96 100%)',
        'gradient-dark': 'linear-gradient(135deg, #000000 0%, #181818 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 30px rgba(232, 80, 2, 0.3)',
        'glow-lg': '0 0 60px rgba(232, 80, 2, 0.4)',
        'premium': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'premium-lg': '0 35px 60px -12px rgba(0, 0, 0, 0.35)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 