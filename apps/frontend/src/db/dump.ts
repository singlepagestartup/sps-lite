import { Dumper as SpsWebsiteBuilderDumper } from "@sps/sps-website-builder-backend-app";
import { Dumper as StartupDumper } from "@sps/startup-backend-app";
import { Dumper as SpsFileStorageDumper } from "@sps/sps-file-storage-backend-app";
import { exit } from "process";

(async () => {
  const spsWebsiteBuilderSeeder = new SpsWebsiteBuilderDumper();
  await spsWebsiteBuilderSeeder.dumpModels();

  // const spsFileStorageSeeder = new SpsFileStorageDumper();
  // await spsFileStorageSeeder.dumpModels();

  // const startupSeeder = new StartupDumper();
  // await startupSeeder.dumpModels();
})()
  .then(() => {
    exit(0);
  })
  .catch((error) => {
    console.error(error);
    exit(1);
  });
