import { Seeder as SpsWebsiteBuilderSeeder } from "@sps/sps-website-builder-backend-app";
import { exit } from "process";

(async () => {
  const spsWebsiteBuilderSeeder = new SpsWebsiteBuilderSeeder();
  await spsWebsiteBuilderSeeder.seed();
})()
  .then(() => {
    exit(0);
  })
  .catch((error) => {
    console.error(error);
    exit(1);
  });
