/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        gray: {
          900: '#121214',
          800: '#1E1E24',
          700: '#2E2E3A',
          600: '#4D4D5C',
          500: '#6C6C7F',
          400: '#8F8FA3',
          300: '#B4B4C0',
          200: '#D7D7DF',
          100: '#F1F1F4',
        },
        purple: {
          50: '#f3f0ff',
          100: '#e9e3ff',
          200: '#d8cbff',
          300: '#bfa3ff',
          400: '#9f6fff',
          500: '#8445ff',
          600: '#7122ff',
          700: '#5f0af7',
          800: '#4d08d2',
          900: '#3f0aad',
        },
        blue: {
          50: '#eaf5ff',
          100: '#d6eaff',
          200: '#b5daff',
          300: '#83c3ff',
          400: '#45a2ff',
          500: '#1a82ff',
          600: '#0064f7',
          700: '#0050df',
          800: '#0542b5',
          900: '#0a3991',
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};