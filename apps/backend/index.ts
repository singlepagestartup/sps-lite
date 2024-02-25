import strapi from "@strapi/strapi";
import dotenv from "dotenv";
dotenv.config({
  path: "apps/backend/.env",
});

(async () => {
  process.chdir("./apps/backend");

  const appDir = process.cwd();
  const distDir = process.cwd() + "/dist/apps/backend";

  strapi({ appDir, distDir }).start();
})();
