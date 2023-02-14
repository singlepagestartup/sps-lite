/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  reactStrictMode: false,
  images: {
    domains: [
      `localhost`,
      `apisps.ru`,
      `singlepageshop.ru`,
      `vercel.app`,
      `tailwindui.com`,
      `images.unsplash.com`,
      `unsplash.com`,
      `721511.selcdn.ru`,
    ],
  },
  trailingSlash: true,
  i18n: {
    locales: process.env.LOCALES.split(`,`) || [`en`],
    defaultLocale: process.env.DEFAULT_LOCALE || `en`,
    localeDetection: false,
  },
};
