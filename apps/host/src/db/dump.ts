// import { Dumper as SpsHostDumper } from "@sps/sps-host/backend/app/root";
// import { Dumper as SpsBroadcastDumper } from "@sps/sps-broadcast/backend/app/root";
// import { Dumper as SpsWebsiteBuilderDumper } from "@sps/sps-website-builder/backend/app/root";
// import { Dumper as StartupDumper } from "@sps/startup/backend/app/root";
// import { Dumper as SpsFileStorageDumper } from "@sps/sps-file-storage/backend/app/root";
// import { Dumper as SpsRbacDumper } from "@sps/sps-rbac/backend/app/root";
import { app as footerBlockApp } from "@sps/sps-website-builder/models/footer-block/backend/app/root";
import { app as logotypeApp } from "@sps/sps-website-builder/models/logotype/backend/app/root";
import { app as footerBlocksToLogotypesApp } from "@sps/sps-website-builder/relations/footer-blocks-to-logotypes/backend/app/root";
import { app as spsWebsiteBuilderApp } from "@sps/sps-website-builder/backend/app/root";

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

  // const dumpFooterBlock = await footerBlockApp.dump();
  // console.log(`🚀 ~ dumpFooterBlock:`, dumpFooterBlock);

  // const dumpLogotype = await logotypeApp.dump();
  // console.log(`🚀 ~ dumpLogotype:`, dumpLogotype);

  // const dumpFooterBlocksToLogotypes = await footerBlocksToLogotypesApp.dump();
  // console.log(`🚀 ~ dumpFooterBlocksToLogotypes:`, dumpFooterBlocksToLogotypes);
  const spsWbDumps = await spsWebsiteBuilderApp.dump({
    type: "model",
    dumps: [],
  });
  console.log(`🚀 ~ spsWbDumps:`, spsWbDumps);
})()
  .then(() => {
    exit(0);
  })
  .catch((error) => {
    console.error(error);
    exit(1);
  });
