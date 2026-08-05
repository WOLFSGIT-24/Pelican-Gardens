import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading:   ["Cormorant Garamond", "Georgia", "serif"],
        body:      ["Plus Jakarta Sans", "Nunito Sans", "system-ui", "sans-serif"],
        paragraph: ["Plus Jakarta Sans", "Nunito Sans", "system-ui", "sans-serif"],
      },
      colors: {
        gold:        "#AA9369",   // Warm Beige / Sand
        "gold-hover":"#8E7A54",   // Darker Sand
        brand:       "#FFFCF9",   // Off-White / Ivory
        "brand-alt": "#F5EFE6",   // Soft warm ivory
        ink:         "#003C44",   // Deep Teal
        muted:       "#3D6068",   // Teal-muted
        teal:        "#003C44",
        border:      "#D9D2C6",
        parchment:   "#FFFCF9",
      },
      borderRadius: {
        card: "24px",
        btn:  "999px",
      },
      transitionDuration: { "800": "800ms" },
      transitionTimingFunction: { premium: "cubic-bezier(0.4, 0, 0.2, 1)" },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries"),
    require("tailwindcss-animate"),
  ],
};

export default config;
