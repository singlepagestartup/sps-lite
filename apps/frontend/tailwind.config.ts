import type { Config } from "tailwindcss";

import shadcnPreset from "./shadcn";

let themeFile;
try {
  themeFile = require("./themes/theme.json");
} catch (error) {
  console.log("No theme file");
}

const config = {
  presets: [shadcnPreset],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js,jsx,tsx}",
    "./src/**/**/*.{html,js,jsx,tsx}",
    "./pages/*.{html,js,jsx,tsx}",
    "./pages/**/*.{html,js,jsx,tsx}",
  ],
} satisfies Config;

// if (themeFile && themeFile.theme?.colors) {
//   for (const color of Object.keys(config.theme.extend.colors)) {
//     if (themeFile.theme.colors[color]) {
//       for (const rate of Object.keys(config.theme.extend.colors[color])) {
//         if (themeFile.theme.colors[color][rate]) {
//           config.theme.extend.colors[color][rate] =
//             themeFile.theme.colors[color][rate];
//         }
//       }
//     }
//   }
// }

export default config;
