import { ISeedResult } from "@sps/shared-backend-api";
import { app as host } from "@sps/host/backend/app/api";
import { app as websiteBuilder } from "@sps/website-builder/backend/app/api";
import { app as rbac } from "@sps/rbac/backend/app/api";
import { app as crm } from "@sps/crm/backend/app/api";
import { app as ecommerce } from "@sps/ecommerce/backend/app/api";
import { app as fileStorage } from "@sps/file-storage/backend/app/api";
import { app as startup } from "@sps/startup/backend/app/api";

import { exit } from "process";

(async () => {
  const seeds: ISeedResult[] = [];

  const hostModelsSeeds = await host.seed({
    type: "model",
    seeds,
  });

  if (Array.isArray(hostModelsSeeds)) {
    hostModelsSeeds.forEach((seed) => {
      seeds.push(seed);
    });
  } else {
    seeds.push(hostModelsSeeds);
  }

  const websiteBuilderModelsSeeds = await websiteBuilder.seed({
    type: "model",
    seeds,
  });

  if (Array.isArray(websiteBuilderModelsSeeds)) {
    websiteBuilderModelsSeeds.forEach((seed) => {
      seeds.push(seed);
    });
  } else {
    seeds.push(websiteBuilderModelsSeeds);
  }

  const crmModelsSeeds = await crm.seed({
    type: "model",
    seeds,
  });

  if (Array.isArray(crmModelsSeeds)) {
    crmModelsSeeds.forEach((seed) => {
      seeds.push(seed);
    });
  } else {
    seeds.push(crmModelsSeeds);
  }

  const ecommerceModelsSeeds = await ecommerce.seed({
    type: "model",
    seeds,
  });

  if (Array.isArray(ecommerceModelsSeeds)) {
    ecommerceModelsSeeds.forEach((seed) => {
      seeds.push(seed);
    });
  } else {
    seeds.push(ecommerceModelsSeeds);
  }

  const rbacModelsSeeds = await rbac.seed({
    type: "model",
    seeds,
  });

  if (Array.isArray(rbacModelsSeeds)) {
    rbacModelsSeeds.forEach((seed) => {
      seeds.push(seed);
    });
  } else {
    seeds.push(rbacModelsSeeds);
  }

  const fileStorageModelsSeeds = await fileStorage.seed({
    type: "model",
    seeds,
  });

  if (Array.isArray(fileStorageModelsSeeds)) {
    fileStorageModelsSeeds.forEach((seed) => {
      seeds.push(seed);
    });
  } else {
    seeds.push(fileStorageModelsSeeds);
  }

  const startupModelsSeeds = await startup.seed({
    type: "model",
    seeds,
  });

  if (Array.isArray(startupModelsSeeds)) {
    startupModelsSeeds.forEach((seed) => {
      seeds.push(seed);
    });
  } else {
    seeds.push(startupModelsSeeds);
  }

  const hostRelationsSeeds = await host.seed({
    type: "relation",
    seeds,
  });

  if (Array.isArray(hostRelationsSeeds)) {
    hostRelationsSeeds.forEach((seed) => {
      seeds.push(seed);
    });
  } else {
    seeds.push(hostRelationsSeeds);
  }

  const websiteBuilderRelationsSeeds = await websiteBuilder.seed({
    type: "relation",
    seeds,
  });

  if (Array.isArray(websiteBuilderRelationsSeeds)) {
    websiteBuilderRelationsSeeds.forEach((seed) => {
      seeds.push(seed);
    });
  } else {
    seeds.push(websiteBuilderRelationsSeeds);
  }

  const crmRelationsSeeds = await crm.seed({
    type: "relation",
    seeds,
  });

  if (Array.isArray(crmRelationsSeeds)) {
    crmRelationsSeeds.forEach((seed) => {
      seeds.push(seed);
    });
  } else {
    seeds.push(crmRelationsSeeds);
  }

  const ecommerceRelationsSeeds = await ecommerce.seed({
    type: "relation",
    seeds,
  });

  if (Array.isArray(ecommerceRelationsSeeds)) {
    ecommerceRelationsSeeds.forEach((seed) => {
      seeds.push(seed);
    });
  } else {
    seeds.push(ecommerceRelationsSeeds);
  }

  const rbacRelationsSeeds = await rbac.seed({
    type: "relation",
    seeds,
  });

  if (Array.isArray(rbacRelationsSeeds)) {
    rbacRelationsSeeds.forEach((seed) => {
      seeds.push(seed);
    });
  } else {
    seeds.push(rbacRelationsSeeds);
  }

  const fileStorageRelationsSeeds = await fileStorage.seed({
    type: "relation",
    seeds,
  });

  if (Array.isArray(fileStorageRelationsSeeds)) {
    fileStorageRelationsSeeds.forEach((seed) => {
      seeds.push(seed);
    });
  } else {
    seeds.push(fileStorageRelationsSeeds);
  }

  const startupRelationsSeeds = await startup.seed({
    type: "relation",
    seeds,
  });

  if (Array.isArray(startupRelationsSeeds)) {
    startupRelationsSeeds.forEach((seed) => {
      seeds.push(seed);
    });
  } else {
    seeds.push(startupRelationsSeeds);
  }
})()
  .then(() => {
    exit(0);
  })
  .catch((error) => {
    console.error(error);
    exit(1);
  });
