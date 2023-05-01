/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  reactStrictMode: false,
  images: {
    domains: [
      "127.0.0.1",
      "localhost",
      "vercel.app",
      "tailwindui.com",
      "images.unsplash.com",
      "unsplash.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.singlepagestartup.com",
      },
      {
        protocol: "https",
        hostname: "**.selcdn.ru",
      },
    ],
  },
  trailingSlash: true,
  experimental: {
    appDir: true,
  },
};
