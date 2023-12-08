import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#584394",
        secondary: "#78529D",
        background: "#EEEEEF",
        foreground: "#FFFFFF",
        text: "#3E3E3E",
      },
      height: {
        header: "52px",
      }
    },
  },
  plugins: [],
}
export default config
