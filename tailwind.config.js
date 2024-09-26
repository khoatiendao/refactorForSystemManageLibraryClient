/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Màu xanh đậm
        secondary: '#9333EA', // Màu tím đậm
        accent: '#F59E0B', // Màu cam vàng
        neutral: '#374151', // Màu xám
        info: '#3B82F6', // Màu xanh lam nhạt
        success: '#10B981', // Màu xanh lá
        warning: '#FBBF24', // Màu vàng
        danger: '#EF4444', // Màu đỏ
        light: '#F3F4F6', // Màu trắng nhạt
        dark: '#111827', // Màu đen đậm
      },
    },
  },
  plugins: [],
}

