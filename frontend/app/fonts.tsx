import localFont from "next/font/local";

export const defaultFont = localFont({
  src: [
    {
      path: "../themes/fonts/Default-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../themes/fonts/Default-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../themes/fonts/Default-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../themes/fonts/Default-RegularItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../themes/fonts/Default-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../themes/fonts/Default-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../themes/fonts/Default-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../themes/fonts/Default-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../themes/fonts/Default-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../themes/fonts/Default-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-default",
  display: "swap",
});

export const primaryFont = localFont({
  src: [
    {
      path: "../themes/fonts/Primary-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../themes/fonts/Primary-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../themes/fonts/Primary-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../themes/fonts/Primary-RegularItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../themes/fonts/Primary-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../themes/fonts/Primary-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../themes/fonts/Primary-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../themes/fonts/Primary-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../themes/fonts/Primary-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../themes/fonts/Primary-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-primary",
  display: "swap",
});

export const fonts = {
  defaultFont,
  primaryFont,
};
