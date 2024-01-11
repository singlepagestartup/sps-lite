/**
 * seeder service
 */

import { factories } from "@strapi/strapi";
const fs = require("fs/promises");
const path = require("path");

export default factories.createCoreService(
  "plugin::sps-migrate.seeder",
  ({ strapi }) => ({
    async run() {
      console.log("Seeding is started");

      const seededModels = {};

      for (const contentType of Object.keys(strapi.contentTypes)) {
        if (contentType !== "plugin::sps-website-builder.page") {
          continue;
        }

        try {
          await strapi.service("plugin::sps-migrate.seeder").seedEntites({
            uid: contentType,
            seededModels,
          });
        } catch (error) {
          console.log("🚀 ~ run ~ error:", error);
        }
      }

      console.log("Seeding is finished");
    },

    async seedEntites({ uid, seededModels }: { uid: any; seededModels: any }) {
      if (!strapi.db) {
        throw new Error("strapi.db is undefined");
      }

      const createdEntites: any = [];

      const { modelDirName, modelName } = strapi
        .service("plugin::sps-migrate.seeder")
        .splitUid({ uid });
      const seeds = await strapi
        .service("plugin::sps-migrate.seeder")
        .getSeeds({
          uid,
        });
      const schema = strapi
        .service("plugin::sps-migrate.seeder")
        .getSchema({ uid });

      if (!seeds) {
        seededModels[modelName] = undefined;
        return;
      }

      // const existingEntities = await strapi.db.query(uid).findMany();
      // if (
      //   existingEntities?.length &&
      //   !["plugin::i18n.locale", "strapi::core-store"].includes(uid)
      // ) {
      //   for (const existingEntity of existingEntities) {
      //     await strapi.db
      //       .query(uid)
      //       .delete({ where: { id: existingEntity.id } });
      //   }
      // }

      if (schema.kind === "collectionType" || modelDirName === "plugin-i18n") {
        for (const seedItem of seeds) {
          const sanitizedSeed = { ...seedItem };

          delete sanitizedSeed.localizations;

          // @todo
          // if (sanitizedSeed.localizations) {
          //   sanitizedSeed.localizations = [];
          //   sanitizedSeed.seeder_filter_by = [
          //     ...(sanitizedSeed.seeder_filter_by || []),
          //     "locale",
          //   ];
          // }

          const mainEntityCreated = await strapi
            .service("plugin::sps-migrate.entity")
            .createBySeed({
              seed: sanitizedSeed,
              seededModels,
              uid,
            });

          if (mainEntityCreated) {
            createdEntites.push({
              old: seedItem,
              new: mainEntityCreated,
            });
          }

          // @todo
          // if (seedItem?.localizations?.length) {
          //   for (const localization of seedItem.localizations) {
          //     const sanitizedLocalizationSeed = {
          //       ...localization,
          //       seeder_filter_by: [
          //         ...(localization.seeder_filter_by || []),
          //         "locale",
          //       ],
          //     };

          //     const created = await strapi
          //       .service("plugin::sps-migrate.entity")
          //       .createBySeed({
          //         seed: sanitizedLocalizationSeed,
          //         seededModels,
          //         uid,
          //       });
          //     if (created) {
          //       createdEntites.push({
          //         old: localization,
          //         new: created,
          //       });
          //     }

          //     const mainEntity: any = await strapi
          //       .service(uid)
          //       .update(mainEntityCreated.id, {
          //         populate: {
          //           localizations: {
          //             populate: "*",
          //           },
          //         },
          //       });

          //     await strapi.db.query(uid).update({
          //       where: { id: created.id },
          //       data: {
          //         localizations: [
          //           ...mainEntity.localizations.filter(
          //             (localization) => localization.locale !== created.locale,
          //           ),
          //           mainEntity.id,
          //         ],
          //       },
          //     });

          //     await strapi.db.query(uid).update({
          //       where: { id: mainEntity.id },
          //       data: {
          //         localizations: [...mainEntity.localizations, created.id],
          //       },
          //     });

          //     for (const mainEntityLocalization of mainEntity.localizations) {
          //       await strapi.db.query(uid).update({
          //         where: { id: mainEntityLocalization.id },
          //         data: {
          //           localizations: [
          //             ...mainEntityLocalization.localizations.filter(
          //               (localization) =>
          //                 localization.locale !== mainEntityLocalization.locale,
          //             ),
          //             created.id,
          //           ],
          //         },
          //       });
          //     }
          //   }
          // }
        }
      } else if (schema.kind === "singleType") {
        const sanitizedSeed = { ...seeds };

        delete sanitizedSeed.localizations;

        // @todo
        // if (sanitizedSeed.localizations) {
        //   sanitizedSeed.localizations = [];
        //   sanitizedSeed.seeder_filter_by = ["locale"];
        // }

        const mainEntityCreated = await strapi
          .service("plugin::sps-migrate.entity")
          .createBySeed({
            seed: sanitizedSeed,
            seededModels,
            uid,
          });

        if (mainEntityCreated) {
          createdEntites.push({
            old: seeds,
            new: mainEntityCreated,
          });
        }

        // @todo
        // if (seeds?.localizations?.length) {
        //   for (const localization of seeds.localizations) {
        //     const created = await strapi
        //       .service("plugin::sps-migrate.entity")
        //       .createBySeed({
        //         seed: { ...localization, seeder_filter_by: ["locale"] },
        //         seededModels,
        //         uid,
        //       });
        //     if (created) {
        //       createdEntites.push({
        //         old: localization,
        //         new: created,
        //       });
        //     }

        //     const mainEntity: any = await strapi
        //       .service(uid)
        //       .update(mainEntityCreated.id, {
        //         populate: {
        //           localizations: {
        //             populate: "*",
        //           },
        //         },
        //       });

        //     await strapi.db.query(uid).update({
        //       where: { id: created.id },
        //       data: {
        //         localizations: [
        //           ...mainEntity.localizations.filter(
        //             (localization) => localization.locale !== created.locale,
        //           ),
        //           mainEntity.id,
        //         ],
        //       },
        //     });

        //     await strapi.db.query(uid).update({
        //       where: { id: mainEntity.id },
        //       data: {
        //         localizations: [...mainEntity.localizations, created.id],
        //       },
        //     });

        //     for (const mainEntityLocalization of mainEntity.localizations) {
        //       await strapi.db.query(uid).update({
        //         where: { id: mainEntityLocalization.id },
        //         data: {
        //           localizations: [
        //             ...mainEntityLocalization.localizations.filter(
        //               (localization) =>
        //                 localization.locale !== mainEntityLocalization.locale,
        //             ),
        //             created.id,
        //           ],
        //         },
        //       });
        //     }
        //   }
        // }
      }
      const createdIds = createdEntites.map((createdEntity) => {
        return createdEntity.new.id;
      });

      const entites = await strapi.db.query(uid).findMany();

      if (entites?.length) {
        for (const entity of entites) {
          if (createdIds.includes(entity.id)) {
            continue;
          }

          await strapi.db.query(uid).delete({ where: { id: entity.id } });
        }
      }

      seededModels[modelName] = createdEntites;
      return createdEntites;
    },

    splitUid({ uid }: { uid: string }) {
      const type = uid.split("::")[0];
      const modelDirName = uid.split("::")[1].split(".")[0];
      const entityName = uid.split("::")[1].split(".")[1];
      let dirPath;
      if (type === "plugin") {
        dirPath = path.join(strapi.dirs.app.extensions);
      } else if (type === "api") {
        dirPath = path.join(strapi.dirs.app.api);
      } else {
        dirPath = path.join(strapi.dirs.app.root);
      }

      let modelName = modelDirName;
      if (uid === "plugin-i18n") {
        modelName = "i18n";
      }

      return { type, modelDirName, modelName, entityName, dirPath };
    },

    getSchema({ uid }: { uid: string }) {
      let schema = strapi.contentTypes[uid]?.["__schema__"];

      if (!schema) {
        schema = strapi.components[uid]["__schema__"];
      }

      return schema;
    },

    async getSeeds({ uid }: { uid: string }) {
      const { dirPath } = strapi
        .service("plugin::sps-migrate.seeder")
        .splitUid({ uid });
      const schema = strapi
        .service("plugin::sps-migrate.seeder")
        .getSchema({ uid });
      const { type, modelDirName, entityName } = strapi
        .service("plugin::sps-migrate.seeder")
        .splitUid({ uid });

      let seed: any[] = [];

      const pathToSeed = path.join(
        dirPath,
        `/${modelDirName}/content-types${
          entityName ? `/${entityName}` : ""
        }/seeds`,
      );

      let seedFiles;
      try {
        seedFiles = await fs.readdir(pathToSeed);
      } catch (error) {
        return;
      }

      if (
        !seedFiles?.length ||
        !seedFiles?.filter((s) => s.includes(".json"))?.length
      ) {
        return seed;
      }

      if (
        schema.kind === "singleType" &&
        seedFiles.filter((s) => s.includes(".json")).length > 1
      ) {
        throw new Error("Single Type entity can have just one json file");
      }

      for (const seedFile of seedFiles) {
        if (!seedFile.includes(".json")) {
          continue;
        }

        const readedSeedFile = await fs
          .readFile(`${pathToSeed}/${seedFile}`, "utf8")
          .catch((error) => {
            // console.log(`🚀 ~ seed ~ error`, error);
          });

        if (
          schema.kind === "collectionType" ||
          modelDirName === "plugin-i18n"
        ) {
          if (!seedFile) {
            return seed;
          }

          seed = [...seed, JSON.parse(readedSeedFile)];
        } else {
          seed = JSON.parse(readedSeedFile);
        }
      }

      return seed;
    },
  }),
);
