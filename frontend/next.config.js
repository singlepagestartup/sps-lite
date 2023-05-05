/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  // output: "export",
  reactStrictMode: false,
  images: {
    // unoptimized: true,
    domains: [
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
