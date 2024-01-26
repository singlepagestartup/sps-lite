import type { Config } from "tailwindcss";
import { join } from "path";
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
    join(__dirname, "./app/**/*.{js,ts,jsx,tsx}"),
    join(__dirname, "./src/**/*.{html,js,jsx,tsx}"),
    join(__dirname, "./src/**/**/*.{html,js,jsx,tsx}"),
    join(__dirname, "./pages/*.{html,js,jsx,tsx}"),
    join(__dirname, "./pages/**/*.{html,js,jsx,tsx}"),
    join(__dirname, "../../libs/**/*.{html,js,ts,jsx,tsx}"),
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
