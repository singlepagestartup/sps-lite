import strapi from "@strapi/strapi";
// import { build } from '@strapi/admin';

const appDir = "./apps/backend";
const distDir = "./apps/backend/dist/apps/backend";

// console.log(`🚀 ~ appDir:`, appDir);
// console.log(`🚀 ~ distDir:`, distDir)

(async () => {
  // await build({});
  strapi({ appDir, distDir }).start();
})();

// 🚀 ~ action ~ appDir: /Users/rogwild/code/singlepagestartup/sps-lite/apps/backend
// 🚀 ~ action ~ distDir: /Users/rogwild/code/singlepagestartup/sps-lite/apps/backend/dist

//   appDir: '/Users/rogwild/code/singlepagestartup/sps-lite/apps/backend',
//   distDir: '/Users/rogwild/code/singlepagestartup/sps-lite/apps/backend/dist/apps/backend
