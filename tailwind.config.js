/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#1F1F1F',
          dark: '#111111',
          light: '#2A2A2A',
        },
        brand: {
          red: '#E53935',
          bright: '#FF4D4F',
          dark: '#B71C1C',
        },
        section: '#F8F9FA',
        heading: '#111827',
        body: '#6B7280',
        success: '#16A34A',
        footer: '#111111',
      },
      fontFamily: {
        heading: ['Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        card: '18px',
      },
      boxShadow: {
        soft: '0 8px 30px rgba(0, 0, 0, 0.06)',
        hover: '0 16px 40px rgba(0, 0, 0, 0.12)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #E53935 0%, #FF4D4F 100%)',
      },
    },
  },
  plugins: [],
}
