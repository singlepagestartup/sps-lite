import type { Config } from "tailwindcss";
import { preset as shadcnPreset } from "./styles/presets/shadcn";

const config = {
  presets: [shadcnPreset],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js,jsx,tsx}",
    "../../libs/**/*.{html,js,ts,jsx,tsx}",
  ],
} satisfies Config;

export default config;
