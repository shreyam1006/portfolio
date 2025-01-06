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
      },
      keyframes: {
        pulse: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.5)", opacity: "0.5" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        flipForward: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(180deg)" },
        },
        flipBackward: {
          "0%": { transform: "rotateY(180deg)" },
          "100%": { transform: "rotateY(0deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        slideFromLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "1" },
          "100%": { transform: "translateX(-1rem)", opacity: "1" },
        },
        flip: {
          "0%": { transform: "perspective(1000px) rotateY(0deg)" },
          "100%": { transform: "perspective(1000px) rotateY(180deg)" },
        },
        flipBack: {
          "0%": { transform: "perspective(1000px) rotateY(180deg)" },
          "100%": { transform: "perspective(1000px) rotateY(0deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        starSpin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        starScale: {
          "0%": { transform: "scale(0.35)" },
          "50%": { transform: "scale(1)" },
          "100%": { transform: "scale(0.35)" },
        },
        scale: {
          "0%": { transform: "scale(0.25)" },
          "50%": { transform: "scale(1)" },
          "100%": { transform: "scale(0.25)" },
        },
        cardSpread: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(10px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        pulse: "pulse 2s infinite",
        "flip-forward": "flipForward 0.6s forwards",
        "flip-backward": "flipBackward 0.6s forwards",
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
        slideFromLeft: "slideFromLeft 0.8s ease-out",
        "flip-forward": "flip 0.6s ease-out forwards",
        "flip-backward": "flipBack 0.6s ease-out forwards",
        float: "float 3s ease-in-out infinite",
        "float-slow": "floatSlow 4s ease-in-out infinite",
        "float-medium": "floatMedium 3s ease-in-out infinite",
        "float-fast": "floatFast 2s ease-in-out infinite",
        "star-spin": "starSpin 4s linear infinite",
        "star-scale": "starScale 4s linear infinite",
        "card-spread": "cardSpread 1.5s ease-in-out infinite",
        scale: "scale 4s ease-in-out infinite",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".preserve-3d": {
          "transform-style": "preserve-3d",
          perspective: "1000px",
        },
        ".backface-hidden": {
          "backface-visibility": "hidden",
        },
        ".flip-container": {
          perspective: "1000px",
        },
      });
    },
  ],
};
