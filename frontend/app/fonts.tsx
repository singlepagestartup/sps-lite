import localFont from "next/font/local";

export const defaultFont = localFont({
  src: [
    {
      path: "../themes/fonts/Default-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-default",
  display: "swap",
});

export const fonts = {
  defaultFont,
};
