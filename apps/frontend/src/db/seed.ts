import { Seeder as SpsWebsiteBuilderSeeder } from "@sps/sps-website-builder-backend-app";
import { Seeder as StartupSeeder } from "@sps/startup-backend-app";
import { Seeder as SpsFileStorageSeeder } from "@sps/sps-file-storage-backend-app";
import { exit } from "process";
import { checkIsModuleShouldSeed } from "@sps/sps-backend-utils";

(async () => {
  const seedResults = {};

  const spsWebsiteBuilderSeeder = new SpsWebsiteBuilderSeeder({
    seedResults,
  });
  const spsWebsiteBuilderShouldSeed = checkIsModuleShouldSeed({
    name: "spsWebsiteBuilder",
  });

  const spsFileStorageSeeder = new SpsFileStorageSeeder({ seedResults });
  const spsFileStorageShouldSeed = checkIsModuleShouldSeed({
    name: "spsFileStorage",
  });

  const startupSeeder = new StartupSeeder({ seedResults });
  const startupShouldSeed = checkIsModuleShouldSeed({
    name: "startup",
  });

  if (spsWebsiteBuilderShouldSeed) {
    await spsWebsiteBuilderSeeder.seedModels();
  }
  if (spsFileStorageShouldSeed) {
    await spsFileStorageSeeder.seedModels();
  }
  if (startupShouldSeed) {
    await startupSeeder.seedModels();
  }

  if (spsWebsiteBuilderShouldSeed) {
    await spsWebsiteBuilderSeeder.seedRelations();
  }
  if (spsFileStorageShouldSeed) {
    await spsFileStorageSeeder.seedRelations();
  }
  if (startupShouldSeed) {
    await startupSeeder.seedRelations();
  }
})()
  .then(() => {
    exit(0);
  })
  .catch((error) => {
    console.error(error);
    exit(1);
  });
