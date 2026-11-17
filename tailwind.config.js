/** @type {import('tailwindcss').Config} */
// Only the utilities layer is used (the cursor and the stretched card link);
// colours, type and spacing live in src/tokens.css.
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {} },
  plugins: [],
}
