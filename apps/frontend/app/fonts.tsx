import localFont from "next/font/local";

export const defaultFont = localFont({
  src: [
    {
      path: "../styles/fonts/Default-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../styles/fonts/Default-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../styles/fonts/Default-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../styles/fonts/Default-RegularItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../styles/fonts/Default-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../styles/fonts/Default-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../styles/fonts/Default-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../styles/fonts/Default-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../styles/fonts/Default-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../styles/fonts/Default-BoldItalic.ttf",
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
      path: "../styles/fonts/Primary-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../styles/fonts/Primary-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../styles/fonts/Primary-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../styles/fonts/Primary-RegularItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../styles/fonts/Primary-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../styles/fonts/Primary-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../styles/fonts/Primary-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../styles/fonts/Primary-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../styles/fonts/Primary-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../styles/fonts/Primary-BoldItalic.ttf",
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
