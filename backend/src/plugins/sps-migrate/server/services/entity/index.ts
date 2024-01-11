/**
 * entity service
 */

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
        const schema = await strapi
          .service("plugin::sps-migrate.seeder")
          .getSchema({ uid });
        const filters = strapi
          .service("plugin::sps-migrate.entity")
          .setFilters({
            entity: data,
            toSkip: keysToSkip,
            schema,
          });

        let existingEntities;

        if (Object.keys(filters)?.length) {
          existingEntities = await strapi.db.query(uid).findMany({
            where: filters,
          });
        }

        const { entityName, modelName } = strapi
          .service("plugin::sps-migrate.seeder")
          .splitUid({ uid });

        if (existingEntities?.length) {
          if (entityName) {
            const updatedEntity = await strapi
              .service(uid)
              .update(existingEntities[0].id, { data });

            return updatedEntity;
          } else {
            const updatedEntity = await strapi.db.query(uid).update({
              where: { id: existingEntities[0].id },
              data,
            });

            return updatedEntity;
          }
        }

        if (entityName) {
          const createdEntity = await strapi.service(uid).create({
            data,
          });

          return createdEntity;
        } else {
          const createdEntity = await strapi.db.query(uid).create({
            data,
          });

          return createdEntity;
        }
      }
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
