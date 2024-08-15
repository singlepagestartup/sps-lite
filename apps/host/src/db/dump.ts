import { app as spsHost } from "@sps/host/backend/app/api";
import { app as spsWebsiteBuilder } from "@sps/website-builder/backend/app/api";
import { app as spsRbac } from "@sps/rbac/backend/app/api";
import { app as spsCrm } from "@sps/crm/backend/app/api";
import { app as spsEcommerce } from "@sps/ecommerce/backend/app/api";
import { app as fileStorage } from "@sps/file-storage/backend/app/api";
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

  await fileStorage.dump({
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

  await fileStorage.dump({
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
