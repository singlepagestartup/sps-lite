/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * @type {import('next').NextConfig}
 */

function makeConfig() {
  const serverEnvironment = process.env.SERVER_ENVIRONMENT;

  const config = {
    reactStrictMode: false,
    images: {
      domains: [
        "vercel.app",
        "tailwindui.com",
        "images.unsplash.com",
        "unsplash.com",
        "localhost",
        "127.0.0.1",
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

  if (serverEnvironment === "icp") {
    config.output = "export";
    config.images.unoptimized = true;
  }

  return config;
}

module.exports = makeConfig();
