/**
 * parameter service
 */

const path = require("path");
const fs = require("fs/promises");
const axios = require("axios");

import { factories } from "@strapi/strapi";

export default factories.createCoreService(
  "plugin::sps-migrate.parameter",
  ({ strapi }) => ({
    getAttributes({ key, uid }: { key: string; uid: string }) {
      const schema = strapi
        .service("plugin::sps-migrate.seeder")
        .getSchema({ uid });

      return schema.attributes[key]; //?
    },

    getType({ key, uid }: { key: string; uid: string }) {
      const attributes = strapi
        .service("plugin::sps-migrate.parameter")
        .getAttributes({ key, uid });
      return attributes?.type;
    },

    async prpare({
      keysToSkip,
      key,
      seedValue,
      seededUids,
      data,
      uid,
    }: {
      keysToSkip: string[];
      key: string;
      seedValue: any;
      seededUids: any;
      data: any;
      uid: string;
    }) {
      const type = strapi
        .service("plugin::sps-migrate.parameter")
        .getType({ key, uid });

      if (keysToSkip.includes(key)) {
        return;
      }

      if (type === "media") {
        return await strapi
          .service("plugin::sps-migrate.parameter")
          .downloadFile({ value: seedValue, uid });
      } else if (type === "relation") {
        return;
        await strapi.service("plugin::sps-migrate.parameter").seedRelations({
          keysToSkip,
          key,
          seedValue,
          seededUids,
          data,
          uid,
        });
      } else if (key === "localizations") {
        return;
        await strapi
          .service("plugin::sps-migrate.parameter")
          .seedLocalizations({
            keysToSkip,
            seedValue,
            seededUids,
            uid,
          }); //?
      } else if (type === "dynamiczone") {
        return await strapi
          .service("plugin::sps-migrate.parameter")
          .seedDynamicZone({
            keysToSkip,
            seedValue,
            seededUids,
          }); //?
      } else if (type === "component") {
        return;
      } else if (type === "uid") {
        return;
      } else {
        return seedValue;
      }
    },

    async seedDynamicZone({
      keysToSkip,
      seedValue,
      seededUids,
    }: {
      keysToSkip: string[];
      seedValue: any;
      seededUids: any;
    }) {
      if (!seedValue.length) {
        return;
      }

      const components: any[] = [];

      for (const dzSeedValue of seedValue) {
        const data = await strapi
          .service("plugin::sps-migrate.entity")
          .prepare({
            keysToSkip,
            seed: dzSeedValue,
            seededUids,
            uid: dzSeedValue.__component,
          });

        components.push(data);
      }

      return components;
    },

    async downloadFile({ value, uid }: { value: any; uid: string }) {
      if (!value) {
        return;
      }

      if (Array.isArray(value)) {
        const createdFiles: any = [];

        for (const fileValue of value) {
          const createdFile = await this.downloadFile({
            value: fileValue,
            uid,
          });
          createdFiles.push(createdFile);
        }

        return createdFiles;
      } else {
        const additionalAttributes = {};
        if (value?.headers) {
          if (Object.keys(value.headers)?.length) {
            additionalAttributes["headers"] = { ...value.headers };
          }
        }

        let file;
        if (value.url.includes("http")) {
          file = await axios({
            method: "GET",
            url: value.url,
            responseType: "arraybuffer",
            ...additionalAttributes,
          })
            .then(function (response) {
              return response.data;
            })
            .catch((error) => {
              console.log("🚀 ~ downloadFile ~ error:", error?.message);
            });
        } else {
          const { dirPath } = strapi
            .service("plugin::sps-migrate.seeder")
            .splitUid({ uid });

          const pathToRoot = path.join(dirPath, "../../"); //?

          file = await fs
            .readFile(`${pathToRoot}/dump/${value.url}`)
            .catch((error) => {
              console.log("🚀 ~ downloadFile ~ error:", error?.message);
            });
        }

        if (!file) {
          return;
        }

        const fileMeta = {
          name: value.name.toLowerCase(),
          type: value.mime,
          size: Buffer.byteLength(file),
          buffer: file,
        };

        const createdFile = await strapi
          .plugin("upload")
          .service("upload")
          .upload({
            files: fileMeta,
            data: {},
          })
          .then((res) => res[0]);

        return createdFile;
      }
    },

    async seedRelations({
      keysToSkip,
      key,
      seedValue,
      seededUids,
      data,
      uid,
    }: {
      keysToSkip: string[];
      key: string;
      seedValue: any;
      seededUids: any;
      data: any;
      uid: string;
    }) {
      if (!strapi.db) {
        throw new Error("strapi.db is undefined");
      }

      const attributes = strapi
        .service("plugin::sps-migrate.parameter")
        .getAttributes({ key, uid });

      const schema = await strapi
        .service("plugin::sps-migrate.seeder")
        .getSchema({ uid });

      const alsoSeededUids = Object.keys(seededUids).filter(
        (seededUid) => seededUid === uid,
      ); //?
      const { modelName } = strapi
        .service("plugin::sps-migrate.seeder")
        .splitUid({ uid });

      if (
        (alsoSeededUids?.length === 0 &&
          attributes.target !== uid &&
          schema.attributes[key]?.mappedBy === modelName) ||
        data.__component
      ) {
        await strapi.service("plugin::sps-migrate.seeder").seedEntites({
          uid,
          seededUids,
        });
      }

      if (!seedValue) {
        return;
      }

      if (Array.isArray(seedValue)) {
        if (!seedValue?.length) {
          return;
        }

        const relations: any = [];
        for (const relationSeedValue of seedValue) {
          let id;
          if (relationSeedValue.id) {
            id = seededUids[attributes.target]?.find((seededItems) => {
              if (seededItems.old.id === relationSeedValue.id) {
                return true;
              }
            })?.new?.id;
          }
          const schema = await strapi
            .service("plugin::sps-migrate.seeder")
            .getSchema({ uid: attributes.target });
          const filters = strapi
            .service("plugin::sps-migrate.parameter")
            .setFilters({
              entity: relationSeedValue,
              toSkip: keysToSkip,
              id,
              schema,
            });
          const [relationEntity] = await strapi.db
            .query(attributes.target)
            .findMany({
              where: filters,
            });

          if (relationEntity) {
            relations.push(relationEntity);
          }
        }
        return relations;
      } else {
        let id;
        if (seedValue.id) {
          id = seededUids[attributes.target]?.find((seededItems) => {
            if (seededItems.old.id === seedValue.id) {
              return true;
            }
          })?.new?.id;
        }
        const schema = await strapi
          .service("plugin::sps-migrate.seeder")
          .getSchema({ uid: attributes.target });
        const filters = strapi
          .service("plugin::sps-migrate.parameter")
          .setFilters({
            entity: seedValue,
            toSkip: keysToSkip,
            id,
            schema,
          });

        filters; //?
        const [relationEntity] = await strapi.db
          .query(attributes.target)
          .findMany({
            where: filters,
          });

        return relationEntity;
      }
    },

    async seedLocalizations({
      keysToSkip,
      seedValue,
      seededUids,
      uid,
    }: {
      keysToSkip: string[];
      seedValue: any;
      seededUids: any;
      uid: string;
    }) {
      if (!strapi.db) {
        throw new Error("strapi.db is undefined");
      }

      const localizations: any[] = [];

      for (const localizationSeedValue of seedValue) {
        delete localizationSeedValue.localizations;

        let id;
        if (localizationSeedValue.id) {
          id = seededUids[uid]?.find((seededItems) => {
            if (seededItems.old.id === localizationSeedValue.id) {
              return true;
            }
          })?.new?.id;
        }
        const schema = await strapi
          .service("plugin::sps-migrate.seeder")
          .getSchema({ uid });
        const filters = strapi
          .service("plugin::sps-migrate.parameter")
          .setFilters({
            entity: { ...localizationSeedValue },
            toSkip: keysToSkip,
            id,
            schema,
          });

        const relationEntities: any = await strapi.db.query(uid).findMany({
          where: filters,
        });

        if (relationEntities?.length) {
          localizations.push(relationEntities[0]);
        }
      }

      return localizations;
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
