/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {},
        screens: {
          'sm': '640px', // Small devices (e.g., phones)
          'md': '768px', // Medium devices (e.g., tablets)
          'lg': '1024px', // Large devices (e.g., laptops)
          'xl': '1280px', // Extra large devices (e.g., desktops)
        },
        width: {
          'fill-available': '-webkit-fill-available',
        },
      },
      variants: {},
  plugins: [],
}
