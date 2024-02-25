/**
 * Tailwind config file is here for importing presets
 * https://github.com/tailwindlabs/tailwindcss/issues/11097#issuecomment-1526886184
 */
import type { Config } from "tailwindcss";
import { join } from "path";
import { preset as shadcnPreset } from "./presets/shadcn";

// let themeFile;
// try {
//   themeFile = require("./themes/theme.json");
// } catch (error) {
//   console.log("No theme file");
// }

const config = {
  presets: [shadcnPreset],
  content: [
    join(process.cwd(), "", "./app/**/*.{js,ts,jsx,tsx}"),
    join(process.cwd(), "", "./src/**/*.{html,js,jsx,tsx}"),
    join(process.cwd(), "", "./src/**/**/*.{html,js,jsx,tsx}"),
    join(process.cwd(), "", "./pages/*.{html,js,jsx,tsx}"),
    join(process.cwd(), "", "./pages/**/*.{html,js,jsx,tsx}"),
    join(process.cwd(), "", "../../libs/**/*.{html,js,ts,jsx,tsx}"),
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
