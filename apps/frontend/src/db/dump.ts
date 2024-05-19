import { Dumper as SpsWebsiteBuilderDumper } from "@sps/sps-website-builder-backend-app";
import { exit } from "process";

(async () => {
  const spsWebsiteBuilderSeeder = new SpsWebsiteBuilderDumper();
  await spsWebsiteBuilderSeeder.dumpModels();

  // const startupSeeder = new StartupSeeder({ seedResults });
  // await startupSeeder.dumpModels();

  // // await spsWebsiteBuilderSeeder.seedRelations();
  // // await startupSeeder.seedRelations();
})()
  .then(() => {
    exit(0);
  })
  .catch((error) => {
    console.error(error);
    exit(1);
  });
