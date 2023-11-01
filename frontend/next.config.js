function makeConfig() {
  const serverEnvironment = process.env.SERVER_ENVIRONMENT;

  const backendHost = process.env.NEXT_PUBLIC_BACKEND_URL.replace(
    "https://",
    "",
  ).replace("http://", "");
  const frontendHost = process.env.NEXT_PUBLIC_FRONTEND_URL.replace(
    "https://",
    "",
  ).replace("http://", "");

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
        backendHost,
        frontendHost,
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

  return config;
}

module.exports = makeConfig();
