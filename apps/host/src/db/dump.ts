import { app as spsHost } from "@sps/sps-host/backend/app/api";
import { app as spsWebsiteBuilder } from "@sps/sps-website-builder/backend/app/api";
import { app as spsRbac } from "@sps/sps-rbac/backend/app/api";
import { app as spsCrm } from "@sps/sps-crm/backend/app/api";
import { app as spsEcommerce } from "@sps/sps-ecommerce/backend/app/api";
import { app as spsFileStorage } from "@sps/sps-file-storage/backend/app/api";
import { app as startup } from "@sps/startup/backend/app/api";

import { exit } from "process";

(async () => {
  await spsHost.dump({
    type: "model",
    dumps: [],
  });

  await spsWebsiteBuilder.dump({
    type: "model",
    dumps: [],
  });

  await spsCrm.dump({
    type: "model",
    dumps: [],
  });

  await spsEcommerce.dump({
    type: "model",
    dumps: [],
  });

  await spsRbac.dump({
    type: "model",
    dumps: [],
  });

  await spsFileStorage.dump({
    type: "model",
    dumps: [],
  });

  await startup.dump({
    type: "model",
    dumps: [],
  });

  await spsHost.dump({
    type: "relation",
    dumps: [],
  });

  await spsWebsiteBuilder.dump({
    type: "relation",
    dumps: [],
  });

  await spsRbac.dump({
    type: "relation",
    dumps: [],
  });

  await spsFileStorage.dump({
    type: "relation",
    dumps: [],
  });

  await spsCrm.dump({
    type: "relation",
    dumps: [],
  });

  await spsEcommerce.dump({
    type: "relation",
    dumps: [],
  });

  await startup.dump({
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
