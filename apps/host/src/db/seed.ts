import { ISeedResult } from "@sps/shared-backend-api";
import { app as spsHost } from "@sps/sps-host/backend/app/api";
import { app as spsWebsiteBuilder } from "@sps/sps-website-builder/backend/app/api";
import { app as spsRbac } from "@sps/sps-rbac/backend/app/api";
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
