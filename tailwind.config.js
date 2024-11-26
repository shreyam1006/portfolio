/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lavender: "#C6B1EA",
        pink: "#F480A3",
        peach: "#F7A474",
        sage: "#C8D98E",
        yellow: "#FFDF70",
        skyblue: "#B6CDDC",
        "work-dark": "#3d405b",
        "work-light": "#f4f1de",
        "work-accent": "#e07a5f",
        "work-green": "#81b29a",
        "work-yellow": "#f2cc8f",
      },
    },
  },
  plugins: [],
};
