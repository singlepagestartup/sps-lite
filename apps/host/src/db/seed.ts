// import { ModuleSeeder as SpsHostModuleSeeder } from "@sps/sps-host/backend/app/root";
// import { ModuleSeeder as SpsBroadcastModuleSeeder } from "@sps/sps-broadcast/backend/app/root";
// import { ModuleSeeder as SpsWebsiteBuilderModuleSeeder } from "@sps/sps-website-builder/backend/app/root";
// import { ModuleSeeder as StartupModuleSeeder } from "@sps/startup/backend/app/root";
// import { ModuleSeeder as SpsFileStorageModuleSeeder } from "@sps/sps-file-storage/backend/app/root";
// import { ModuleSeeder as SpsRbacModuleSeeder } from "@sps/sps-rbac/backend/app/root";
import { ISeedResult } from "@sps/shared-backend-api";
import { app as spsWebsiteBuilderApp } from "@sps/sps-website-builder/backend/app/root";
import { app as spsRbacApp } from "@sps/sps-rbac/backend/app/root";

import { exit } from "process";

(async () => {
  const seeds: ISeedResult[] = [];

  const spsWebsiteBuilderModelsSeeds = await spsWebsiteBuilderApp.seed({
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

  const spsRbacModelsSeeds = await spsRbacApp.seed({
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

  const spsWebsiteBuilderRelationsSeeds = await spsWebsiteBuilderApp.seed({
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

  const spsRbacRelationsSeeds = await spsRbacApp.seed({
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

  // console.log(`🚀 ~ seeds:`, seeds);

  // const seedingWidget = await footerBlockApp.seed({ seeds });

  // seeds.push(seedingWidget);
  // // console.log(`🚀 ~ seedingWidget:`, seedingWidget);

  // const seedingLogotype = await logotypeApp.seed({ seeds });
  // // console.log(`🚀 ~ seedingLogotype:`, seedingLogotype);
  // seeds.push(seedingLogotype);

  // const seedingFooterBlocksToLogotypes = await footerBlocksToLogotypesApp.seed({
  //   seeds,
  // });

  // seeds.push(seedingFooterBlocksToLogotypes);

  // const spsHostModuleSeeder = new SpsHostModuleSeeder({
  //   seedResults,
  //   seedConfig,
  // });

  // const spsBroadcastModuleSeeder = new SpsBroadcastModuleSeeder({
  //   seedResults,
  //   seedConfig,
  // });

  // const spsWebsiteBuilderModuleSeeder = new SpsWebsiteBuilderModuleSeeder({
  //   seedResults,
  //   seedConfig,
  // });

  // const spsFileStorageModuleSeeder = new SpsFileStorageModuleSeeder({
  //   seedResults,
  //   seedConfig,
  // });

  // const spsRbacModuleSeeder = new SpsRbacModuleSeeder({
  //   seedResults,
  //   seedConfig,
  // });

  // const startupModuleSeeder = new StartupModuleSeeder({
  //   seedResults,
  //   seedConfig,
  // });

  // if (spsHostModuleSeeder.config.seed || seedAll) {
  //   await spsHostModuleSeeder.seedModels();
  // }
  // if (spsBroadcastModuleSeeder.config.seed || seedAll) {
  //   await spsBroadcastModuleSeeder.seedModels();
  // }
  // // if (spsWebsiteBuilderModuleSeeder.config.seed || seedAll) {
  // //   await spsWebsiteBuilderModuleSeeder.seedModels();
  // // }
  // if (spsFileStorageModuleSeeder.config.seed || seedAll) {
  //   await spsFileStorageModuleSeeder.seedModels();
  // }
  // // if (spsRbacModuleSeeder.config.seed || seedAll) {
  // //   await spsRbacModuleSeeder.seedModels();
  // // }
  // if (startupModuleSeeder.config.seed || seedAll) {
  //   await startupModuleSeeder.seedModels();
  // }

  // if (spsHostModuleSeeder.config.seed || seedAll) {
  //   await spsHostModuleSeeder.seedRelations();
  // }
  // if (spsBroadcastModuleSeeder.config.seed || seedAll) {
  //   await spsBroadcastModuleSeeder.seedRelations();
  // }
  // // if (spsWebsiteBuilderModuleSeeder.config.seed || seedAll) {
  // //   await spsWebsiteBuilderModuleSeeder.seedRelations();
  // // }
  // if (spsFileStorageModuleSeeder.config.seed || seedAll) {
  //   await spsFileStorageModuleSeeder.seedRelations();
  // }
  // // if (spsRbacModuleSeeder.config.seed || seedAll) {
  // //   await spsRbacModuleSeeder.seedRelations();
  // // }
  // if (startupModuleSeeder.config.seed || seedAll) {
  //   await startupModuleSeeder.seedRelations();
  // }
})()
  .then(() => {
    exit(0);
  })
  .catch((error) => {
    console.error(error);
    exit(1);
  });
