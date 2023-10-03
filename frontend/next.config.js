/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * @type {import('next').NextConfig}
 */
const { withSentryConfig } = require("@sentry/nextjs");

function makeConfig() {
  const serverEnvironment = process.env.SERVER_ENVIRONMENT;

  let config = {
    reactStrictMode: false,
    images: {
      unoptimized: true,
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
        {
          protocol: "https",
          hostname: "**.amazonaws.com",
        },
      ],
    },
    trailingSlash: true,
  };

  if (serverEnvironment === "icp") {
    config.output = "export";
  }

  if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
    config = withSentryConfig(
      config,
      {
        // For all available options, see:
        // https://github.com/getsentry/sentry-webpack-plugin#options

        // Suppresses all logs
        silent: true,
      },
      {
        // For all available options, see:
        // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

        // Hides source maps from generated client bundles
        hideSourceMaps: true,

        // Automatically tree-shake Sentry logger statements to reduce bundle size
        disableLogger: true,
      },
    );
  }

  return config;
}

module.exports = makeConfig();
