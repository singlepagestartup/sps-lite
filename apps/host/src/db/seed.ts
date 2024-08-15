import { ISeedResult } from "@sps/shared-backend-api";
import { app as spsHost } from "@sps/host/backend/app/api";
import { app as spsWebsiteBuilder } from "@sps/website-builder/backend/app/api";
import { app as spsRbac } from "@sps/rbac/backend/app/api";
import { app as spsCrm } from "@sps/crm/backend/app/api";
import { app as spsEcommerce } from "@sps/ecommerce/backend/app/api";
import { app as fileStorage } from "@sps/file-storage/backend/app/api";
import { app as startup } from "@sps/startup/backend/app/api";

import { exit } from "process";

(async () => {
  const seeds: ISeedResult[] = [];

  const spsHostModelsSeeds = await spsHost.seed({
    type: "model",
    seeds,
  });

  if (Array.isArray(spsHostModelsSeeds)) {
    spsHostModelsSeeds.forEach((seed) => {
      seeds.push(seed);
    });
  } else {
    seeds.push(spsHostModelsSeeds);
  }

  const spsWebsiteBuilderModelsSeeds = await spsWebsiteBuilder.seed({
    type: "model",
    seeds,
  });

  if (Array.isArray(spsWebsiteBuilderModelsSeeds)) {
    spsWebsiteBuilderModelsSeeds.forEach((seed) => {
      seeds.push(seed);
    });
  } else {
    seeds.push(spsWebsiteBuilderModelsSeeds);
  }

  const spsCrmModelsSeeds = await spsCrm.seed({
    type: "model",
    seeds,
  });

  if (Array.isArray(spsCrmModelsSeeds)) {
    spsCrmModelsSeeds.forEach((seed) => {
      seeds.push(seed);
    });
  } else {
    seeds.push(spsCrmModelsSeeds);
  }

  const spsEcommerceModelsSeeds = await spsEcommerce.seed({
    type: "model",
    seeds,
  });

  if (Array.isArray(spsEcommerceModelsSeeds)) {
    spsEcommerceModelsSeeds.forEach((seed) => {
      seeds.push(seed);
    });
  } else {
    seeds.push(spsEcommerceModelsSeeds);
  }

  const spsRbacModelsSeeds = await spsRbac.seed({
    type: "model",
    seeds,
  });

  if (Array.isArray(spsRbacModelsSeeds)) {
    spsRbacModelsSeeds.forEach((seed) => {
      seeds.push(seed);
    });
  } else {
    seeds.push(spsRbacModelsSeeds);
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

  const spsHostRelationsSeeds = await spsHost.seed({
    type: "relation",
    seeds,
  });

  if (Array.isArray(spsHostRelationsSeeds)) {
    spsHostRelationsSeeds.forEach((seed) => {
      seeds.push(seed);
    });
  } else {
    seeds.push(spsHostRelationsSeeds);
  }

  const spsWebsiteBuilderRelationsSeeds = await spsWebsiteBuilder.seed({
    type: "relation",
    seeds,
  });

  if (Array.isArray(spsWebsiteBuilderRelationsSeeds)) {
    spsWebsiteBuilderRelationsSeeds.forEach((seed) => {
      seeds.push(seed);
    });
  } else {
    seeds.push(spsWebsiteBuilderRelationsSeeds);
  }

  const spsCrmRelationsSeeds = await spsCrm.seed({
    type: "relation",
    seeds,
  });

  if (Array.isArray(spsCrmRelationsSeeds)) {
    spsCrmRelationsSeeds.forEach((seed) => {
      seeds.push(seed);
    });
  } else {
    seeds.push(spsCrmRelationsSeeds);
  }

  const spsEcommerceRelationsSeeds = await spsEcommerce.seed({
    type: "relation",
    seeds,
  });

  if (Array.isArray(spsEcommerceRelationsSeeds)) {
    spsEcommerceRelationsSeeds.forEach((seed) => {
      seeds.push(seed);
    });
  } else {
    seeds.push(spsEcommerceRelationsSeeds);
  }

  const spsRbacRelationsSeeds = await spsRbac.seed({
    type: "relation",
    seeds,
  });

  if (Array.isArray(spsRbacRelationsSeeds)) {
    spsRbacRelationsSeeds.forEach((seed) => {
      seeds.push(seed);
    });
  } else {
    seeds.push(spsRbacRelationsSeeds);
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
