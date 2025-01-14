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
        bulbColors: {
          "0%, 100%": { fill: "#C6B1EA" },
          "20%": { fill: "#F480A3" },
          "40%": { fill: "#C8D98E" },
          "60%": { fill: "#FFDF70" },
          "80%": { fill: "#B6CDDC" },
        },
        dropFall: {
          "0%": {
            transform: "translateY(0)",
            opacity: "1",
          },
          "100%": {
            transform: "translateY(90px) translateX(-100px)",
            opacity: "0",
          },
        },
        twinkle: {
          "0%, 100%": {
            opacity: "0.2",
          },
          "50%": {
            opacity: "1",
          },
        },
        flyAway: {
          "0%": {
            transform: "translateY(0) rotateX(0)",
            opacity: "1",
          },
          "100%": {
            transform: "translateY(-1000px) rotateX(60deg)",
            opacity: "0",
          },
        },
        showBottom: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
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
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.5)" },
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
        slideLine: {
          "0%": { transform: "scaleX(0)", transformOrigin: "left" },
          "100%": { transform: "scaleX(1)", transformOrigin: "left" },
        },
      },
      animation: {
        "bulb-colors": "bulbColors 10s linear infinite",
        "water-drop": "dropFall 2s infinite",
        "water-drop-1": "dropFall 2s infinite",
        "water-drop-2": "dropFall 2s infinite",
        "water-drop-3": "dropFall 2s infinite",
        glitter: "twinkle 1.5s infinite ease-in-out",
        "glitter-1": "twinkle 1.5s infinite ease-in-out",
        "glitter-2": "twinkle 1.5s infinite ease-in-out",
        "glitter-3": "twinkle 1.5s infinite ease-in-out",
        "glitter-4": "twinkle 1.5s infinite ease-in-out",
        "glitter-5": "twinkle 1.5s infinite ease-in-out",
        "card-fly": "flyAway 1s ease-in forwards",
        "card-show": "showBottom 0.5s ease-out forwards",
        pulse: "pulse 2s infinite",
        "flip-forward": "flipForward 0.6s forwards",
        "flip-backward": "flipBackward 0.6s forwards",
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
        marquee3: "marquee 50s linear infinite",
        marquee4: "marquee2 50s linear infinite",
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
        "slide-line": "slideLine 2s linear infinite",
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
        ".rotate-x-90": {
          transform: "rotateX(90deg)",
        },
        ".pause": {
          "animation-play-state": "paused",
        },
      });
    },
  ],
};
