import { Dumper as SpsHostDumper } from "@sps/sps-host/backend/app/root";
import { Dumper as SpsBroadcastDumper } from "@sps/sps-broadcast/backend/app/root";
// import { Dumper as SpsWebsiteBuilderDumper } from "@sps/sps-website-builder/backend/app/root";
import { Dumper as StartupDumper } from "@sps/startup/backend/app/root";
import { Dumper as SpsFileStorageDumper } from "@sps/sps-file-storage/backend/app/root";
// import { Dumper as SpsRbacDumper } from "@sps/sps-rbac/backend/app/root";
import { app as widgetApp } from "@sps/sps-website-builder/models/widget/backend/app/root";

import { exit } from "process";

(async () => {
  // const spsHostSeeder = new SpsHostDumper();
  // await spsHostSeeder.dumpModels();
  // const spsBroadcastSeeder = new SpsBroadcastDumper();
  // await spsBroadcastSeeder.dumpModels();
  // const spsWebsiteBuilderSeeder = new SpsWebsiteBuilderDumper();
  // await spsWebsiteBuilderSeeder.dumpModels();
  // const spsFileStorageSeeder = new SpsFileStorageDumper();
  // await spsFileStorageSeeder.dumpModels();
  // const spsRbacSeeder = new SpsRbacDumper();
  // await spsRbacSeeder.dumpModels();
  // const startupSeeder = new StartupDumper();
  // await startupSeeder.dumpModels();
  const dumpingWidget = await widgetApp.dump();
  console.log(`🚀 ~ dumpingWidget:`, dumpingWidget);
})()
  .then(() => {
    exit(0);
  })
  .catch((error) => {
    console.error(error);
    exit(1);
  });
