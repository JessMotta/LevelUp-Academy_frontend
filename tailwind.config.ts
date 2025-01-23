import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "var(--color-primary)",
        'green-1': "var(--color-green-1)",
        'green-2': "var(--color-green-2)",
        'green-3': "var(--color-green-3)",
        'green-4': "var(--color-green-4)",
        'green-5': "var(--color-green-5)",
        'green-6': "var(--color-green-6)",
        'green-7': "var(--color-green-7)",
        'green-8': "var(--color-green-8)",
        'green-9': "var(--color-green-9)",
        'green-10': "var(--color-green-10)",
        'green-11': "var(--color-green-11)",
        'green-12': "var(--color-green-12)",
        'green-13': "var(--color-green-13)",
        'green-14': "var(--color-green-14)",
        'blue': "var(--color-blue)",
        'dark': "var(--color-dark)",
        'white': "var(--color-white)",
        'grey': "var(--color-grey)",
        'yellow': "var(--color-yellow)",
        'red': "var(--color-red)",
      },
    },
  },
  plugins: [],
} satisfies Config;
