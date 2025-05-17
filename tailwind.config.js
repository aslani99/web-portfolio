import tailwindcss from '@tailwindcss/vite'


module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
          colors: {
        royalBlue: '#4169E1',
        deepPurple: '#6A0DAD',
        richBlack: '#0F0F0F',
        brandGold: '#FFD700',
        softWhite: '#F2F2F2',
      },
  },
  plugins: [],
  corePlugins: {
    backdropFilter: true, // اضافه کردن پشتیبانی برای فیلترهای پس‌زمینه
  },
};
