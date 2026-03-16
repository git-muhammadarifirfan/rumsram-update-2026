/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        page: '#f3f3f1',
        ink: '#141414',
        navy: '#011335',
        brand: '#0b7a35',
        muted: '#6f7278',
        lilac: '#8b5cf6',
      },
      boxShadow: {
        nav: '0 14px 40px rgba(12, 18, 36, 0.08)',
        card: '0 18px 36px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        panel: '28px',
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        shell: '1180px',
      },
      keyframes: {
        floatIn: {
          '0%': { opacity: '0', transform: 'translateY(-14px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
      },
      animation: {
        floatIn: 'floatIn 0.45s ease-out both',
      },
    },
  },
  plugins: [],
};
