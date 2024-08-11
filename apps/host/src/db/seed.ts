import { ISeedResult } from "@sps/shared-backend-api";
import { app as spsHost } from "@sps/sps-host/backend/app/api";
import { app as spsWebsiteBuilder } from "@sps/sps-website-builder/backend/app/api";
import { app as spsRbac } from "@sps/sps-rbac/backend/app/api";
import { app as spsCrm } from "@sps/sps-crm/backend/app/api";
import { app as spsEcommerce } from "@sps/sps-ecommerce/backend/app/api";
import { app as spsFileStorage } from "@sps/sps-file-storage/backend/app/api";
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

  const spsFileStorageModelsSeeds = await spsFileStorage.seed({
    type: "model",
    seeds,
  });

  if (Array.isArray(spsFileStorageModelsSeeds)) {
    spsFileStorageModelsSeeds.forEach((seed) => {
      seeds.push(seed);
    });
  } else {
    seeds.push(spsFileStorageModelsSeeds);
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

  const spsFileStorageRelationsSeeds = await spsFileStorage.seed({
    type: "relation",
    seeds,
  });

  if (Array.isArray(spsFileStorageRelationsSeeds)) {
    spsFileStorageRelationsSeeds.forEach((seed) => {
      seeds.push(seed);
    });
  } else {
    seeds.push(spsFileStorageRelationsSeeds);
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
