/**
 * entity service
 */

import MD5 from "crypto-js/md5";
import { factories } from "@strapi/strapi";

export default factories.createCoreService(
  "plugin::sps-migrate.entity",
  ({ strapi }) => ({
    async prepare({
      keysToSkip,
      seed,
      seededUids,
      uid,
    }: {
      keysToSkip: string[];
      seed: any;
      seededUids: any;
      uid: string;
    }) {
      const data = {};

      for (const seedKey of Object.keys(seed)) {
        const value = await strapi
          .service("plugin::sps-migrate.parameter")
          .prpare({
            keysToSkip,
            key: seedKey,
            seedValue: seed[seedKey],
            seededUids,
            data,
            uid,
          });

        if (value) {
          data[seedKey] = value;
        }
      }

      return data;
    },

    async seedEntities({
      uid,
      seededUids,
    }: {
      uid: string;
      seededUids: any[];
    }) {
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
        seededUids[uid] = undefined;
        return;
      }

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
            .createOrUpdateBySeed({
              seed: sanitizedSeed,
              seededUids,
              uid,
            });

          if (mainEntityCreated) {
            createdEntites.push({
              seedEntity: seedItem,
              dbEntity: mainEntityCreated,
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
          //       .createOrUpdateBySeed({
          //         seed: sanitizedLocalizationSeed,
          //         seededUids,
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
          .createOrUpdateBySeed({
            seed: sanitizedSeed,
            seededUids,
            uid,
          });

        if (mainEntityCreated) {
          createdEntites.push({
            seedEntity: seeds,
            dbEntity: mainEntityCreated,
          });
        }

        // @todo
        // if (seeds?.localizations?.length) {
        //   for (const localization of seeds.localizations) {
        //     const created = await strapi
        //       .service("plugin::sps-migrate.entity")
        //       .createOrUpdateBySeed({
        //         seed: { ...localization, seeder_filter_by: ["locale"] },
        //         seededUids,
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

      seededUids[uid] = createdEntites;

      return createdEntites;
    },

    async createOrUpdateBySeed({
      seed,
      seededUids,
      uid,
    }: {
      seed: any;
      seededUids: any;
      uid: any;
    }) {
      if (!strapi.db) {
        throw new Error("strapi.db is undefined");
      }

      const keysToSkip = [
        "id",
        "createdAt",
        "updatedAt",
        "createdBy",
        "updatedBy",
      ];

      const data = await strapi.service("plugin::sps-migrate.entity").prepare({
        keysToSkip,
        seed,
        seededUids,
        uid,
      });

      if (data) {
        const hashedData = strapi
          .service("plugin::sps-migrate.entity")
          .getDataHash({ data, uid });

        const { results: existingEntities } = await strapi.service(uid).find({
          pagination: {
            limit: -1,
          },
        });

        let targetEntity;
        for (const existingEntity of existingEntities) {
          const hashedExistingEntity = strapi
            .service("plugin::sps-migrate.entity")
            .getDataHash({ data: existingEntity, uid });
          if (hashedExistingEntity === hashedData) {
            targetEntity = existingEntity;
            break;
          }
        }

        if (targetEntity) {
          const updatedEntity = await strapi
            .service(uid)
            .update(targetEntity.id, {
              data,
            });

          return updatedEntity;
        } else {
          const createdEntity = await strapi.service(uid).create({
            data,
          });

          return createdEntity;
        }
      }
    },

    getDataHash({ data, uid }: { data: any; uid: string }) {
      const schema = strapi
        .service("plugin::sps-migrate.seeder")
        .getSchema({ uid });

      const simpleDataKeys = Object.entries(schema.attributes)
        .filter(
          ([key, attribute]: [string, any]) =>
            !["dynamiczone", "relation"].includes(attribute.type),
        )
        .map(([key]) => key);

      const notRelationData = {};
      for (const key of simpleDataKeys) {
        notRelationData[key] = data[key];
      }
      const stringifiedData = JSON.stringify(notRelationData);

      const dataHash = MD5(stringifiedData).toString();

      return dataHash;
    },

    // setFilters({
    //   entity,
    //   toSkip = [],
    //   id,
    //   schema,
    // }: {
    //   entity: any;
    //   toSkip?: any[];
    //   id?: any;
    //   schema?: any;
    // }) {
    //   const filters = {};

    //   if (id) {
    //     filters["id"] = id;
    //   } else {
    //     const seederFilterBy = Object.keys(entity).find(
    //       (key) => key === "seeder_filter_by",
    //     );
    //     if (seederFilterBy && entity["seeder_filter_by"]) {
    //       for (const filterKey of entity["seeder_filter_by"]) {
    //         if (filterKey.includes(".")) {
    //           const key = filterKey.split(".");
    //           if (key.length === 2) {
    //             if (entity[key[0]] && typeof entity[key[0]] === "object") {
    //               filters[key[0]] = entity[key[0]][key[1]];
    //               continue;
    //             }
    //           }
    //         } else {
    //           if (entity[filterKey]) {
    //             filters[filterKey] = entity[filterKey];
    //           }
    //         }
    //       }

    //       if (
    //         entity["seeder_filter_by"].length === 1 &&
    //         entity["seeder_filter_by"].find((key) => key === "locale")
    //       ) {
    //         for (const relationSeedValueKey of Object.keys(entity)) {
    //           relationSeedValueKey; //?
    //           if ([...toSkip, "publishedAt"].includes(relationSeedValueKey)) {
    //             continue;
    //           }

    //           if (
    //             typeof entity[relationSeedValueKey] === "string" ||
    //             typeof entity[relationSeedValueKey] === "number"
    //           ) {
    //             filters[relationSeedValueKey] = entity[relationSeedValueKey];
    //           }
    //         }
    //       }
    //     } else {
    //       for (const relationSeedValueKey of Object.keys(entity)) {
    //         relationSeedValueKey; //?
    //         if ([...toSkip, "publishedAt"].includes(relationSeedValueKey)) {
    //           continue;
    //         }

    //         if (
    //           typeof entity[relationSeedValueKey] === "string" ||
    //           typeof entity[relationSeedValueKey] === "number"
    //         ) {
    //           filters[relationSeedValueKey] = entity[relationSeedValueKey];
    //         }
    //       }
    //     }
    //   }

    //   const sanitizedFilters = { ...filters };

    //   if (schema) {
    //     for (const filterKey of Object.keys(filters)) {
    //       if (["id", "locale"].includes(filterKey)) {
    //         continue;
    //       }
    //       if (!schema.attributes[filterKey]) {
    //         delete sanitizedFilters[filterKey];
    //       }
    //     }
    //   }

    //   return sanitizedFilters;
    // },
  }),
);
