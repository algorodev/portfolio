import tailwindForms from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    '../index.html',
    './**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#E5D283',
        'secondary': '#EBEF95',
      },
      fontFamily: {
        'sans' : ['Roboto, sans-serif']
      }
    },
  },
  plugins: [tailwindForms],
}

