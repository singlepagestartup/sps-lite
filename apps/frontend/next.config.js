const { withNx } = require("@nx/next/plugins/with-nx");

const BACKEND_URL =
  process.env["NEXT_PUBLIC_BACKEND_URL"] || "http://localhost:3000";
const FRONTEND_URL =
  process.env["NEXT_PUBLIC_FRONTEND_URL"] || "http://localhost:3000";

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

function makeConfig() {
  const backendHost = BACKEND_URL?.replace("https://", "").replace(
    "http://",
    "",
  );
  const frontendHost = FRONTEND_URL?.replace("https://", "").replace(
    "http://",
    "",
  );

  let config = {
    reactStrictMode: true,
    images: {
      unoptimized: true,
      domains: ["localhost", "127.0.0.1", backendHost, frontendHost],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**.singlepagestartup.com",
        },
        {
          protocol: "https",
          hostname: "**.vercel.app",
        },
        {
          protocol: "https",
          hostname: "**.amazonaws.com",
        },
      ],
    },
  };

  return withBundleAnalyzer(config);
}

const config = makeConfig();

module.exports = withNx(config);
