import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: "#ffffff",
        backgroundLight: "#F2F0FF",
        imageBackground: "#F7F7F7",
        skeletonBackground: "#9ca3af",
        headingDark: "#0D0E43",
        textPrimary: "#151875",
        accent: "#FB2E86",
      },
      keyframes: {
        noti: {
          "100%": { width: "0" },
        },
      },
      animation: {
        "noti-animation": "noti 3s linear forwards",
      },
    },
  },
  plugins: [],
};
export default config;
