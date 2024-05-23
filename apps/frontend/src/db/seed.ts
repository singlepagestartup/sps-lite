import { Seeder as SpsWebsiteBuilderSeeder } from "@sps/sps-website-builder-backend-app";
import { Seeder as StartupSeeder } from "@sps/startup-backend-app";
import { Seeder as SpsFileStorageSeeder } from "@sps/sps-file-storage-backend-app";
import { exit } from "process";

(async () => {
  const seedResults = {};

  const spsWebsiteBuilderSeeder = new SpsWebsiteBuilderSeeder({ seedResults });
  await spsWebsiteBuilderSeeder.seedModels();

  const spsFileStorageSeeder = new SpsFileStorageSeeder({ seedResults });
  await spsFileStorageSeeder.seedModels();

  const startupSeeder = new StartupSeeder({ seedResults });
  await startupSeeder.seedModels();

  await spsWebsiteBuilderSeeder.seedRelations();
  await spsFileStorageSeeder.seedRelations();
  await startupSeeder.seedRelations();
})()
  .then(() => {
    exit(0);
  })
  .catch((error) => {
    console.error(error);
    exit(1);
  });
