/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: 'rgb(var(--color-border)/<alpha-value>)',
        ring: 'rgb(var(--color-ring)/<alpha-value>)',
        background: 'rgb(var(--color-background)/<alpha-value>)',
        foreground: 'rgb(var(--color-foreground)/<alpha-value>)',
      },
    },
  },
  plugins: [],
};
