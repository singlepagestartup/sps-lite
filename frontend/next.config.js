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
      `singlepagestartup.com`,
      `vercel.app`,
      `tailwindui.com`,
      `images.unsplash.com`,
      `unsplash.com`,
      `721511.selcdn.ru`,
    ],
  },
  trailingSlash: true,
  experimental: {
    appDir: true,
  },
};
