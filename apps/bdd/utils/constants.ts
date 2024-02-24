require("dotenv").config({
  path: (() => {
    return ".env";
  })(),
});

export const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:1337";
export const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";
