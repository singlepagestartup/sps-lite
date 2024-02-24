/**
 * entity service
 */

import MD5 from "crypto-js/md5";
import { factories } from "@strapi/strapi";
const fs = require("fs/promises");

export default factories.createCoreService(
  "plugin::sps-migrate.entity",
  ({ strapi }) => ({
    async dump({ uid }: { uid: string }) {
      const seedFolder = await strapi
        .service("plugin::sps-migrate.seeder")
        .getSeedsFolder({ uid });

      if (!seedFolder) {
        return;
      }

      const { seedFiles, pathToSeedsFolder } = seedFolder;

      let entites = await strapi
        .service("plugin::sps-migrate.entity")
        .getDbEntities({ uid });

      for (const oldSeedFile of seedFiles) {
        await fs.unlink(oldSeedFile);
      }

      if (!entites.length && !entites) {
        return;
      }

      if (!entites.length) {
        entites = [entites];
      }

      for (const entity of entites) {
        const seedFileName = `${pathToSeedsFolder}/${entity.id}.json`;

        await fs.writeFile(seedFileName, JSON.stringify(entity, null, 2));
      }

      return seedFiles;
    },

    async getDbEntities({ uid }: { uid: any }) {
      if (!strapi.entityService) {
        throw new Error("strapi.entityService is undefined");
      }

      const populate = strapi
        .service("plugin::sps-migrate.entity")
        .getPopulate({ uid });

      const entites = await strapi.entityService.findMany(uid, {
        populate,
        locale: "all",
        limit: -1,
      });

      return entites;
    },

    getPopulate({ uid }: { uid: any }) {
      const schema = strapi
        .service("plugin::sps-migrate.seeder")
        .getSchema({ uid });

      const populate: any = {};

      if (schema.pluginOptions?.i18n?.localized) {
        populate.localizations = true;
      }

      for (const [key, config] of Object.entries(schema.attributes) as any) {
        const structureAttributeKeys = strapi
          .service("plugin::sps-migrate.entity")
          .getStructureAttributeKeys({ uid });

        if (!structureAttributeKeys.includes(key)) {
          continue;
        }

        if (["relation", "media"].includes(config.type)) {
          populate[key] = "*";
          continue;
        }

        if (["component"].includes(config.type)) {
          const componentPopulate = strapi
            .service("plugin::sps-migrate.entity")
            .getPopulate({ uid: config.component });

          populate[key] = { populate: componentPopulate };
          continue;
        }

        if (["dynamiczone"].includes(config.type)) {
          let dynamiczonePopulate = {};

          for (const dynamiczoneComponent of config.components) {
            const componentPopulate = strapi
              .service("plugin::sps-migrate.entity")
              .getPopulate({ uid: dynamiczoneComponent });

            dynamiczonePopulate = {
              ...dynamiczonePopulate,
              ...componentPopulate,
            };
          }

          populate[key] = { populate: dynamiczonePopulate };
          continue;
        }
      }

      return populate;
    },

    async seed({ uid, seededUids }: { uid: string; seededUids: any[] }) {
      const seededEntites: any = [];

      const seeds = await strapi
        .service("plugin::sps-migrate.seeder")
        .getSeeds({
          uid,
        });

      if (!seeds) {
        seededUids[uid] = undefined;
        return;
      }

      for (const seedItem of seeds) {
        const sanitizedSeed = { ...seedItem };

        const dbEntity = await strapi
          .service("plugin::sps-migrate.entity")
          .createOrUpdateBySeed({
            seed: sanitizedSeed,
            uid,
          });

        if (dbEntity) {
          seededEntites.push({
            seedEntity: seedItem,
            dbEntity,
          });
        }
      }

      await strapi
        .service("plugin::sps-migrate.entity")
        .deleteNotSeededEntites({ uid, seededEntites });

      seededUids[uid] = seededEntites;

      return seededEntites;
    },

    async seedRelations({
      uid,
      seededUids,
    }: {
      uid: string;
      seededUids: any[];
    }) {
      const seeds = await strapi
        .service("plugin::sps-migrate.seeder")
        .getSeeds({
          uid,
        });

      if (!seeds) {
        return;
      }

      if (!Array.isArray(seededUids[uid])) {
        return;
      }

      for (const seededUid of seededUids[uid]) {
        await strapi
          .service("plugin::sps-migrate.entity")
          .updateBySeed({ uid, seededUid, seededUids });
      }
    },

    async updateBySeed({
      uid,
      seededUid,
      seededUids,
    }: {
      uid: any;
      seededUid: any;
      seededUids: any[];
    }) {
      if (!strapi.entityService) {
        throw new Error("strapi.entityService is undefined");
      }

      const data = await strapi
        .service("plugin::sps-migrate.entity")
        .getStructureSeedData({
          seededUids,
          seed: seededUid.seedEntity,
          uid,
        });

      if (data) {
        const updatedDbEntity: any = await strapi.entityService.update(
          uid,
          seededUid.dbEntity.id,
          {
            data,
          },
        );

        if (data.localizations) {
          await strapi.query(uid).update({
            where: {
              id: updatedDbEntity.id,
            },
            data: { localizations: data.localizations },
          });
        }

        seededUid.dbEntity = updatedDbEntity;
      }

      return seededUids;
    },

    async getStructureSeedData({
      seed,
      seededUids,
      uid,
    }: {
      seed: any;
      uid: string;
      seededUids: any[];
    }) {
      const structureAttributeKeys = strapi
        .service("plugin::sps-migrate.entity")
        .getStructureAttributeKeys({ uid });
      const schema = strapi
        .service("plugin::sps-migrate.seeder")
        .getSchema({ uid });

      if (!structureAttributeKeys.length) {
        return;
      }

      const data: any = {};

      for (const structureAttributeKey of structureAttributeKeys) {
        const schema = strapi
          .service("plugin::sps-migrate.seeder")
          .getSchema({ uid });
        const structureAttributeKeyConfig =
          schema.attributes[structureAttributeKey];

        if (structureAttributeKeyConfig.type === "dynamiczone") {
          const attributeKeyData = await strapi
            .service("plugin::sps-migrate.entity")
            .getDynamicZoneSeedData({
              seed: seed[structureAttributeKey],
              seededUids,
            });

          data[structureAttributeKey] = attributeKeyData;
        } else if (structureAttributeKeyConfig.type === "media") {
          const attributeKeyData = await strapi
            .service("plugin::sps-migrate.parameter")
            .downloadFile({
              seed: seed[structureAttributeKey],
              uid,
            });

          if (!attributeKeyData) {
            data[structureAttributeKey] = null;
          }

          data[structureAttributeKey] = attributeKeyData;
        } else if (structureAttributeKeyConfig.type === "component") {
          const attributeKeyData = await strapi
            .service("plugin::sps-migrate.entity")
            .getComponentSeedData({
              seed: seed[structureAttributeKey],
              seededUids,
              config: structureAttributeKeyConfig,
            });

          data[structureAttributeKey] = attributeKeyData;
        } else if (structureAttributeKeyConfig.type === "relation") {
          const attributeKeyData = await strapi
            .service("plugin::sps-migrate.entity")
            .getRelationSeedData({
              seed: seed[structureAttributeKey],
              seededUids,
              config: structureAttributeKeyConfig,
            });

          data[structureAttributeKey] = attributeKeyData;
        }
      }

      if (schema.pluginOptions?.i18n?.localized) {
        const localizationsData = await strapi
          .service("plugin::sps-migrate.entity")
          .getLocalizationRelationSeedData({
            seed,
            seededUids,
            uid,
          });

        data.localizations = localizationsData;
      }

      return data;
    },

    async getLocalizationRelationSeedData({
      seededUids,
      seed,
      uid,
    }: {
      seededUids: any[];
      seed: any;
      uid: string;
    }) {
      const seedLocalizationsIds = seed.localizations?.map((l) => l.id);
      if (!seedLocalizationsIds?.length) {
        return;
      }

      const data = seededUids[uid]
        ?.filter((su) => seedLocalizationsIds.includes(su.seedEntity.id))
        ?.map((su) => {
          return { id: su.dbEntity.id };
        });

      return data;
    },

    async getRelationSeedData({
      seededUids,
      seed,
      config,
    }: {
      seededUids: any[];
      seed: any;
      config: any;
    }) {
      if (Array.isArray(seed)) {
        if (!seed.length) {
          return;
        }
      } else {
        if (!seed) {
          return;
        }
      }

      if (!seededUids[config.target]) {
        return;
      }

      if (config.relation === "oneToOne") {
        const seededUid = seededUids[config.target].find((seededUid) => {
          return seededUid.seedEntity.id === seed.id;
        });

        if (seededUid) {
          return {
            id: seededUid.dbEntity.id,
          };
        }
      }

      if (config.relation === "manyToOne") {
        const seededUid = seededUids[config.target].find((seededUid) => {
          return seededUid.seedEntity.id === seed.id;
        });

        if (seededUid) {
          return {
            id: seededUid.dbEntity.id,
          };
        }
      }

      if (config.relation === "manyToMany") {
        if (config.inversedBy) {
          return;
        }

        if (Array.isArray(seed)) {
          const data: any = [];

          for (const seedItem of seed) {
            const seededUid = seededUids[config.target].find((seededUid) => {
              return seededUid.seedEntity.id === seedItem.id;
            });

            if (seededUid) {
              data.push({
                id: seededUid.dbEntity.id,
              });
            }
          }

          return data;
        }
      }
    },

    async getComponentSeedData({
      seed,
      seededUids,
      config,
    }: {
      seed: any;
      seededUids: any[];
      config: any;
    }) {
      let data;

      if (Array.isArray(seed)) {
        data = [];

        for (const seedData of seed) {
          let componentData = {};

          const plainData = strapi
            .service("plugin::sps-migrate.entity")
            .getPlainSeedData({
              uid: config.component,
              seed: seedData,
            });
          const structureData = await strapi
            .service("plugin::sps-migrate.entity")
            .getStructureSeedData({
              uid: config.component,
              seed: seedData,
              seededUids,
            });

          if (plainData) {
            componentData = { ...componentData, ...plainData };
          }
          if (structureData) {
            componentData = { ...componentData, ...structureData };
          }

          data.push(componentData);
        }
      } else {
        const plainData = strapi
          .service("plugin::sps-migrate.entity")
          .getPlainSeedData({
            uid: config.component,
            seed,
          });
        const structureData = await strapi
          .service("plugin::sps-migrate.entity")
          .getStructureSeedData({
            uid: config.component,
            seed,
            seededUids,
          });

        if (plainData) {
          data = { ...data, ...plainData };
        }
        if (structureData) {
          data = { ...data, ...structureData };
        }
      }

      return data;
    },

    async getDynamicZoneSeedData({
      seed,
      seededUids,
    }: {
      seed: any;
      seededUids: any;
    }) {
      const data: any = [];

      for (const seedData of seed) {
        let dynamiczoneData: any = {
          __component: seedData.__component,
        };

        const plainData = strapi
          .service("plugin::sps-migrate.entity")
          .getPlainSeedData({
            uid: seedData.__component,
            seed: seedData,
          });
        const structureData = await strapi
          .service("plugin::sps-migrate.entity")
          .getStructureSeedData({
            uid: seedData.__component,
            seed: seedData,
            seededUids,
          });

        if (plainData) {
          dynamiczoneData = { ...dynamiczoneData, ...plainData };
        }
        if (structureData) {
          dynamiczoneData = { ...dynamiczoneData, ...structureData };
        }

        data.push(dynamiczoneData);
      }

      return data;
    },

    async createOrUpdateBySeed({ seed, uid }: { seed: any; uid: any }) {
      if (!strapi.db) {
        throw new Error("strapi.db is undefined");
      }

      if (!strapi.entityService) {
        throw new Error("strapi.entityService is undefined");
      }

      const data = await strapi
        .service("plugin::sps-migrate.entity")
        .getPlainSeedData({
          seed,
          uid,
        });

      if (data) {
        const hashedData = strapi
          .service("plugin::sps-migrate.entity")
          .getDataHash({ data, uid });

        let existingEntities: any = await strapi.entityService.findMany(uid, {
          locale: "all",
          limit: -1,
        });

        // console.log("🚀 ~ createOrUpdateBySeed ~ data:", data);
        // console.log(
        //   "🚀 ~ createOrUpdateBySeed ~ existingEntities:",
        //   existingEntities,
        // );

        let targetEntity;

        if (existingEntities) {
          if (!Array.isArray(existingEntities) && existingEntities) {
            existingEntities = [existingEntities];
          }

          for (const existingEntity of existingEntities) {
            const hashedExistingEntity = strapi
              .service("plugin::sps-migrate.entity")
              .getDataHash({ data: existingEntity, uid });

            if (hashedExistingEntity === hashedData) {
              targetEntity = existingEntity;
              break;
            }
          }
        }

        if (targetEntity) {
          const updatedEntity = await strapi.entityService.update(
            uid,
            targetEntity.id,
            {
              data,
            },
          );

          return updatedEntity;
        } else {
          try {
            const createdEntity: any = await strapi.entityService.create(uid, {
              data,
            });

            return createdEntity;
          } catch (error) {
            const fixedEnties = await strapi
              .service("plugin::sps-migrate.entity")
              .fixValidationErrorWithSameAttribute({ uid, error, data });

            if (fixedEnties) {
              const createdEntity: any = await strapi.entityService.create(
                uid,
                {
                  data,
                },
              );

              return createdEntity;
            }

            throw error;
          }
        }
      }
    },

    /**
     * Fixing error like:
     * YupValidationError: This attribute must be unique
     * at handleYupError (/usr/src/app/node_modules/@strapi/utils/dist/index.js:408:9)
     * at /usr/src/app/node_modules/@strapi/utils/dist/index.js:418:7
     */
    async fixValidationErrorWithSameAttribute({
      uid,
      error,
      data,
    }: {
      uid: any;
      error: any;
      data: any;
    }) {
      if (!strapi.entityService) {
        throw new Error("strapi.entityService is undefined");
      }

      if (error.message === "This attribute must be unique") {
        const validationErrorPath = error.details?.errors
          ?.map((e) => e?.path)
          ?.flat(1);

        if (validationErrorPath) {
          const filters = {};
          for (const path of validationErrorPath) {
            filters[path] = data[path];
          }

          const existingEntitiesWithSameAttribute: any =
            await strapi.entityService.findMany(uid, {
              filters,
              locale: "all",
              limit: -1,
            });

          if (existingEntitiesWithSameAttribute) {
            const fixedEnties: any[] = [];

            for (const entity of existingEntitiesWithSameAttribute) {
              const randomizedData = {};

              for (const path of validationErrorPath) {
                randomizedData[path] = `${data[path]}-${Math.random()}`;
              }

              const updatedExistingEntity: any =
                await strapi.entityService.update(uid, entity.id, {
                  data: randomizedData,
                });

              fixedEnties.push(updatedExistingEntity);
            }

            return fixedEnties;
          }
        }
      }
    },

    getPlainSeedData({ seed, uid }: { seed: any; uid: string }) {
      const data: any = {};

      const schema = strapi
        .service("plugin::sps-migrate.seeder")
        .getSchema({ uid });
      const plainAttributeKeys = strapi
        .service("plugin::sps-migrate.entity")
        .getPlainAttributeKeys({ uid });

      for (const plainAttributeKey of plainAttributeKeys) {
        data[plainAttributeKey] = seed[plainAttributeKey];
      }

      if (seed.publishedAt) {
        data.publishedAt = seed.publishedAt;
      }

      if (schema.pluginOptions?.i18n?.localized) {
        data.locale = seed.locale;
      }

      return data;
    },

    async deleteNotSeededEntites({
      uid,
      seededEntites,
    }: {
      uid: string;
      seededEntites: any;
    }) {
      if (!strapi.db) {
        throw new Error("strapi.db is undefined");
      }

      const seededIds = seededEntites.map((seededEntity) => {
        return seededEntity.dbEntity.id;
      });

      const entites = await strapi.db.query(uid).findMany();

      if (entites?.length) {
        for (const entity of entites) {
          if (seededIds.includes(entity.id)) {
            continue;
          }

          await strapi.db.query(uid).delete({ where: { id: entity.id } });
        }
      }
    },

    getPlainAttributeKeys({ uid }: { uid: string }) {
      const schema = strapi
        .service("plugin::sps-migrate.seeder")
        .getSchema({ uid });

      const plainAttributeKeys = Object.entries(schema.attributes)
        .filter(
          ([key, attribute]: [string, any]) =>
            !["dynamiczone", "relation", "component", "media"].includes(
              attribute.type,
            ),
        )
        .map(([key]) => key);

      return plainAttributeKeys;
    },

    getStructureAttributeKeys({ uid }: { uid: string }) {
      const schema = strapi
        .service("plugin::sps-migrate.seeder")
        .getSchema({ uid });

      const structureAttributeKeys = Object.entries(schema.attributes)
        .filter(([key, attribute]: [string, any]) =>
          ["dynamiczone", "relation", "media", "component"].includes(
            attribute.type,
          ),
        )
        .map(([key]) => key);

      return structureAttributeKeys;
    },

    getDataHash({ data, uid }: { data: any; uid: string }) {
      const schema = strapi
        .service("plugin::sps-migrate.seeder")
        .getSchema({ uid });

      const plainAttributeKeys = strapi
        .service("plugin::sps-migrate.entity")
        .getPlainAttributeKeys({ uid });

      const toHashData: any = {};
      for (const key of plainAttributeKeys) {
        toHashData[key] = data[key];
      }

      if (schema.pluginOptions?.i18n?.localized) {
        toHashData.locale = data.locale;
      }

      const stringifiedData = JSON.stringify(toHashData);

      const dataHash = MD5(stringifiedData).toString();

      return dataHash;
    },
  }),
);
