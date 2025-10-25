import formsPlugin from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: { 'app': '720px' },
      boxShadow: {
        'app': '0px 2px 12px 0px rgba(54, 89, 226, 0.12)',
        'modal-header': '0px 0px 12px 0px rgba(54, 89, 226, 0.12), 0px 4px 8px 0px rgba(54, 89, 226, 0.08)',
      },
    },
  },
  plugins: [formsPlugin],
};
