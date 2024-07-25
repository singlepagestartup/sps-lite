// import { Dumper as SpsHostDumper } from "@sps/sps-host/backend/app/root";
// import { Dumper as SpsBroadcastDumper } from "@sps/sps-broadcast/backend/app/root";
// import { Dumper as SpsWebsiteBuilderDumper } from "@sps/sps-website-builder/backend/app/root";
// import { Dumper as StartupDumper } from "@sps/startup/backend/app/root";
// import { Dumper as SpsFileStorageDumper } from "@sps/sps-file-storage/backend/app/root";
// import { Dumper as SpsRbacDumper } from "@sps/sps-rbac/backend/app/root";
import { app as spsHostApp } from "@sps/sps-host/backend/app/api";
import { app as spsWebsiteBuilderApp } from "@sps/sps-website-builder/backend/app/api";
import { app as spsRbacApp } from "@sps/sps-rbac/backend/app/root";

import { exit } from "process";

(async () => {
  await spsHostApp.dump({
    type: "model",
    dumps: [],
  });

  await spsWebsiteBuilderApp.dump({
    type: "model",
    dumps: [],
  });

  await spsRbacApp.dump({
    type: "model",
    dumps: [],
  });

  await spsHostApp.dump({
    type: "relation",
    dumps: [],
  });

  await spsWebsiteBuilderApp.dump({
    type: "relation",
    dumps: [],
  });

  await spsRbacApp.dump({
    type: "relation",
    dumps: [],
  });

  // const logotypeDump = await logotype.dump();
  // console.log(`🚀 ~ logotypeDump:`, logotypeDump);

  // console.log(`🚀 ~ relations:`, relations);
})()
  .then(() => {
    exit(0);
  })
  .catch((error) => {
    console.error(error);
    exit(1);
  });
