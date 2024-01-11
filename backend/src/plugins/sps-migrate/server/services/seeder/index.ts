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

      const seededUids = {};

      for (const contentType of Object.keys(strapi.contentTypes)) {
        if (contentType !== "plugin::sps-website-builder.page") {
          continue;
        }

        try {
          await strapi.service("plugin::sps-migrate.entity").seed({
            uid: contentType,
            seededUids,
          });
        } catch (error) {
          console.log("🚀 ~ run ~ error:", error);
        }
      }

      for (const contentType of Object.keys(strapi.contentTypes)) {
        if (contentType !== "plugin::sps-website-builder.page") {
          continue;
        }

        try {
          await strapi.service("plugin::sps-migrate.entity").seedRelations({
            uid: contentType,
            seededUids,
          });
        } catch (error) {
          console.log("🚀 ~ run ~ error:", error);
        }
      }

      console.log("Seeding is finished");
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

      const seeds: any[] = [];

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
        return seeds;
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

        seeds.push(JSON.parse(readedSeedFile));
      }

      return seeds;
    },
  }),
);
