import { app as host } from "@sps/host/backend/app/api";
import { app as websiteBuilder } from "@sps/website-builder/backend/app/api";
import { app as rbac } from "@sps/rbac/backend/app/api";
import { app as crm } from "@sps/crm/backend/app/api";
import { app as ecommerce } from "@sps/ecommerce/backend/app/api";
import { app as notification } from "@sps/notification/backend/app/api";
import { app as fileStorage } from "@sps/file-storage/backend/app/api";
import { app as startup } from "@sps/startup/backend/app/api";

import { exit } from "process";

(async () => {
  await fileStorage.dump({
    type: "model",
    dumps: [],
  });

  await websiteBuilder.dump({
    type: "model",
    dumps: [],
  });

  await crm.dump({
    type: "model",
    dumps: [],
  });

  await ecommerce.dump({
    type: "model",
    dumps: [],
  });

  await notification.dump({
    type: "model",
    dumps: [],
  });

  await startup.dump({
    type: "model",
    dumps: [],
  });

  await rbac.dump({
    type: "model",
    dumps: [],
  });

  await host.dump({
    type: "model",
    dumps: [],
  });

  await fileStorage.dump({
    type: "relation",
    dumps: [],
  });

  await websiteBuilder.dump({
    type: "relation",
    dumps: [],
  });

  await crm.dump({
    type: "relation",
    dumps: [],
  });

  await ecommerce.dump({
    type: "relation",
    dumps: [],
  });

  await notification.dump({
    type: "relation",
    dumps: [],
  });

  await startup.dump({
    type: "relation",
    dumps: [],
  });

  await rbac.dump({
    type: "relation",
    dumps: [],
  });

  await host.dump({
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
