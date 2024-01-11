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

    async seedRelations({
      uid,
      seededUids,
    }: {
      uid: string;
      seededUids: any[];
    }) {
      for (const seededUid of seededUids[uid]) {
        await strapi
          .service("plugin::sps-migrate.entity")
          .updateBySeed({ uid, seededUid, seededUids });
      }

      return seededUids;
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
      const data = await strapi
        .service("plugin::sps-migrate.entity")
        .getStructureSeedData({
          seededUids,
          seed: seededUid.seedEntity,
          uid,
        });

      if (data) {
        const updatedDbEntity = await strapi
          .service(uid)
          .update(seededUid.dbEntity.id, {
            data,
          });

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

      if (!structureAttributeKeys.length) {
        return;
      }

      const data = {};

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
              uid: uid,
            });

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
          const seedData = seed[structureAttributeKey];

          if (Array.isArray(seedData)) {
            if (!seedData.length) {
              continue;
            }
          } else {
            if (!seedData) {
              continue;
            }
          }

          if (!seededUids[structureAttributeKeyConfig.target]) {
            continue;
          }

          console.log("🚀 ~ seedData:", seedData);
        }
      }

      return data;
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

        delete sanitizedSeed.localizations;

        const mainEntityCreated = await strapi
          .service("plugin::sps-migrate.entity")
          .createOrUpdateBySeed({
            seed: sanitizedSeed,
            uid,
          });

        if (mainEntityCreated) {
          seededEntites.push({
            seedEntity: seedItem,
            dbEntity: mainEntityCreated,
          });
        }
      }

      await strapi
        .service("plugin::sps-migrate.entity")
        .deleteNotSeededEntites({ uid, seededEntites });

      seededUids[uid] = seededEntites;

      return seededEntites;
    },

    async createOrUpdateBySeed({ seed, uid }: { seed: any; uid: any }) {
      if (!strapi.db) {
        throw new Error("strapi.db is undefined");
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

    getPlainSeedData({ seed, uid }: { seed: any; uid: string }) {
      const data = {};

      const plainAttributeKeys = strapi
        .service("plugin::sps-migrate.entity")
        .getPlainAttributeKeys({ uid });

      for (const plainAttributeKey of plainAttributeKeys) {
        data[plainAttributeKey] = seed[plainAttributeKey];
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
      const plainAttributeKeys = strapi
        .service("plugin::sps-migrate.entity")
        .getPlainAttributeKeys({ uid });

      const toHashData = {};
      for (const key of plainAttributeKeys) {
        toHashData[key] = data[key];
      }
      const stringifiedData = JSON.stringify(toHashData);

      const dataHash = MD5(stringifiedData).toString();

      return dataHash;
    },
  }),
);
