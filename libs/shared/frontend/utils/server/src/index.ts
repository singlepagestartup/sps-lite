import { api as fetchApi } from "./lib/fetch-api";
export * as tailwindConfig from "./lib/tailwind/tailwind.config";
export { preset as shadcnPreset } from "./lib/tailwind/presets/shadcn";
export const fetch = { api: fetchApi };
