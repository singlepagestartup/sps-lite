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

      // const allowedContentTypes: string[] = [
      //   "plugin::sps-website-builder.navbar",
      // ];

      const notAllowedContentTypes: any = [
        "admin::api-token",
        "admin::api-token-permission",
        "admin::permission",
        "admin::role",
        "admin::transfer-token",
        "admin::transfer-token-permission",
        "admin::user",
        "plugin::upload.file",
        "plugin::upload.folder",
        "plugin::users-permissions.permission",
        "plugin::users-permissions.user",
        "plugin::content-releases.release",
        "plugin::content-releases.release-action",
        "plugin::i18n.locale",
      ];

      try {
        await strapi.service("plugin::sps-migrate.entity").seed({
          uid: "plugin::i18n.locale",
          seededUids,
        });
      } catch (error) {
        console.log("🚀 ~ run ~ error: plugin::i18n.locale", error);
      }

      for (const contentType of Object.keys(strapi.contentTypes)) {
        // if (!allowedContentTypes.includes(contentType)) {
        //   continue;
        // }

        if (notAllowedContentTypes.includes(contentType)) {
          continue;
        }

        try {
          await strapi.service("plugin::sps-migrate.entity").seed({
            uid: contentType,
            seededUids,
          });
        } catch (error) {
          console.log("🚀 ~ run ~ error:", contentType, error);
        }
      }

      for (const contentType of Object.keys(strapi.contentTypes)) {
        // if (!allowedContentTypes.includes(contentType)) {
        //   continue;
        // }

        if (notAllowedContentTypes.includes(contentType)) {
          continue;
        }

        try {
          await strapi.service("plugin::sps-migrate.entity").seedRelations({
            uid: contentType,
            seededUids,
          });
        } catch (error) {
          console.log("🚀 ~ run ~ error:", contentType, error);
        }
      }

      console.log("Seeding is finished");
    },

    splitUid({ uid }: { uid: string }) {
      const type = uid.split("::")[0];
      let modelDirName = uid.split("::")[1].split(".")[0];
      const entityName = uid.split("::")[1].split(".")[1];
      let dirPath;
      if (type === "plugin") {
        dirPath = path.join(strapi.dirs.app.extensions);
      } else if (type === "api") {
        dirPath = path.join(strapi.dirs.app.api);
      } else {
        dirPath = path.join(strapi.dirs.app.root);
      }

      if (uid === "plugin::i18n.locale") {
        modelDirName = "plugin-i18n";
      }

      return { type, modelDirName, entityName, dirPath };
    },

    getSchema({ uid }: { uid: string }) {
      let schema = strapi.contentTypes[uid]?.["__schema__"];

      if (!schema) {
        schema = strapi.components[uid]["__schema__"];
      }

      return schema;
    },

    async getSeedsFolder({ uid }: { uid: string }) {
      const { dirPath } = strapi
        .service("plugin::sps-migrate.seeder")
        .splitUid({ uid });
      const { modelDirName, entityName } = strapi
        .service("plugin::sps-migrate.seeder")
        .splitUid({ uid });

      const pathToSeedsFolder = path.join(
        dirPath,
        `/${modelDirName}/content-types${
          entityName ? `/${entityName}` : ""
        }/seeds`,
      );

      let seedFiles;
      try {
        seedFiles = await fs.readdir(pathToSeedsFolder);
      } catch (error) {
        return;
      }

      seedFiles = seedFiles
        .filter((s) => {
          return s.includes(".json");
        })
        .map((s) => {
          return `${pathToSeedsFolder}/${s}`;
        });

      return { seedFiles, pathToSeedsFolder };
    },

    async getSeeds({ uid }: { uid: string }) {
      const seedFolder = await strapi
        .service("plugin::sps-migrate.seeder")
        .getSeedsFolder({ uid });

      if (!seedFolder) {
        return;
      }

      const { seedFiles } = seedFolder;

      const seeds: any[] = [];

      if (!seedFiles?.length || !seedFiles?.length) {
        return seeds;
      }

      const schema = strapi
        .service("plugin::sps-migrate.seeder")
        .getSchema({ uid });

      if (schema.kind === "singleType" && seedFiles.length > 1) {
        throw new Error("Single Type entity can't has more than one entity");
      }

      for (const seedFile of seedFiles) {
        const readedSeedFile = await fs
          .readFile(seedFile, "utf8")
          .catch((error) => {
            // console.log(`🚀 ~ seed ~ error`, error);
          });

        seeds.push(JSON.parse(readedSeedFile));
      }

      return seeds;
    },
  }),
);
