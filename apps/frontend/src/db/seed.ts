import { Seeder as SpsWebsiteBuilderSeeder } from "@sps/sps-website-builder-backend-app";
import { Seeder as StartupSeeder } from "@sps/startup-backend-app";
import { Seeder as SpsFileStorageSeeder } from "@sps/sps-file-storage-backend-app";
import { exit } from "process";
import { checkIsModuleShouldNotSeed } from "@sps/sps-backend-utils";

(async () => {
  const seedResults = {};

  const spsWebsiteBuilderSeeder = new SpsWebsiteBuilderSeeder({
    seedResults,
  });
  const skipSpsWebsiteBuilderSeed = checkIsModuleShouldNotSeed({
    name: "spsWebsiteBuilder",
  });

  const spsFileStorageSeeder = new SpsFileStorageSeeder({ seedResults });
  const skipSpsFileStorageSeed = checkIsModuleShouldNotSeed({
    name: "spsFileStorage",
  });

  const startupSeeder = new StartupSeeder({ seedResults });
  const skipStartupSeed = checkIsModuleShouldNotSeed({
    name: "startup",
  });

  if (!skipSpsWebsiteBuilderSeed) {
    await spsWebsiteBuilderSeeder.seedModels();
  }
  if (!skipSpsFileStorageSeed) {
    await spsFileStorageSeeder.seedModels();
  }
  if (!skipStartupSeed) {
    await startupSeeder.seedModels();
  }

  if (!skipSpsWebsiteBuilderSeed) {
    await spsWebsiteBuilderSeeder.seedRelations();
  }
  if (!skipSpsFileStorageSeed) {
    await spsFileStorageSeeder.seedRelations();
  }
  if (!skipStartupSeed) {
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
