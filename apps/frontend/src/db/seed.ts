import { Seeder as SpsWebsiteBuilderSeeder } from "@sps/sps-website-builder-backend-app";
import { Seeder as StartupSeeder } from "@sps/startup-backend-app";
import { exit } from "process";

(async () => {
  const seedResults = {};

  const spsWebsiteBuilderSeeder = new SpsWebsiteBuilderSeeder({ seedResults });
  await spsWebsiteBuilderSeeder.seedModels();

  const startupSeeder = new StartupSeeder({ seedResults });
  await startupSeeder.seedModels();

  await spsWebsiteBuilderSeeder.seedRelations();
  await startupSeeder.seedRelations();
})()
  .then(() => {
    exit(0);
  })
  .catch((error) => {
    console.error(error);
    exit(1);
  });
