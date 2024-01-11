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
      seededModels,
      uid,
    }: {
      keysToSkip: string[];
      seed: any;
      seededModels: any;
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
            seededModels,
            data,
            uid,
          });

        if (value) {
          data[seedKey] = value;
        }
      }

      return data;
    },

    async createBySeed({
      seed,
      seededModels,
      uid,
    }: {
      seed: any;
      seededModels: any;
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
        seededModels,
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

    setFilters({
      entity,
      toSkip = [],
      id,
      schema,
    }: {
      entity: any;
      toSkip?: any[];
      id?: any;
      schema?: any;
    }) {
      const filters = {};

      if (id) {
        filters["id"] = id;
      } else {
        const seederFilterBy = Object.keys(entity).find(
          (key) => key === "seeder_filter_by",
        );
        if (seederFilterBy && entity["seeder_filter_by"]) {
          for (const filterKey of entity["seeder_filter_by"]) {
            if (filterKey.includes(".")) {
              const key = filterKey.split(".");
              if (key.length === 2) {
                if (entity[key[0]] && typeof entity[key[0]] === "object") {
                  filters[key[0]] = entity[key[0]][key[1]];
                  continue;
                }
              }
            } else {
              if (entity[filterKey]) {
                filters[filterKey] = entity[filterKey];
              }
            }
          }

          if (
            entity["seeder_filter_by"].length === 1 &&
            entity["seeder_filter_by"].find((key) => key === "locale")
          ) {
            for (const relationSeedValueKey of Object.keys(entity)) {
              relationSeedValueKey; //?
              if ([...toSkip, "publishedAt"].includes(relationSeedValueKey)) {
                continue;
              }

              if (
                typeof entity[relationSeedValueKey] === "string" ||
                typeof entity[relationSeedValueKey] === "number"
              ) {
                filters[relationSeedValueKey] = entity[relationSeedValueKey];
              }
            }
          }
        } else {
          for (const relationSeedValueKey of Object.keys(entity)) {
            relationSeedValueKey; //?
            if ([...toSkip, "publishedAt"].includes(relationSeedValueKey)) {
              continue;
            }

            if (
              typeof entity[relationSeedValueKey] === "string" ||
              typeof entity[relationSeedValueKey] === "number"
            ) {
              filters[relationSeedValueKey] = entity[relationSeedValueKey];
            }
          }
        }
      }

      const sanitizedFilters = { ...filters };

      if (schema) {
        for (const filterKey of Object.keys(filters)) {
          if (["id", "locale"].includes(filterKey)) {
            continue;
          }
          if (!schema.attributes[filterKey]) {
            delete sanitizedFilters[filterKey];
          }
        }
      }

      return sanitizedFilters;
    },
  }),
);
