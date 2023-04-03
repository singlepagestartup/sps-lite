export {};

declare global {
  interface Window {
    utmReferer?: string | string[];
    offsetWidth: number;
  }
}
