/**
 * dumper service
 */

import { factories } from "@strapi/strapi";
import path from "path";
const fsExtra = require("fs-extra");

export default factories.createCoreService(
  "plugin::sps-migrate.dumper",
  ({ strapi }) => ({
    async run() {
      console.log("Dumping is started");

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
      ];

      for (const contentType of Object.keys(strapi.contentTypes)) {
        if (notAllowedContentTypes.includes(contentType)) {
          continue;
        }
        try {
          await strapi.service("plugin::sps-migrate.entity").dump({
            uid: contentType,
          });
        } catch (error) {
          console.log("🚀 ~ run ~ error:", error);
        }
      }

      if (process.env.DUMP_UPLOADS) {
        const appRoot = path.join(strapi.dirs.app.root);
        const uploadsPath = path.join(appRoot, "./public/uploads");
        const dumpPath = path.join(appRoot, "./dump/uploads");

        try {
          await fsExtra.emptyDir(dumpPath);
        } catch (error) {
          console.log("🚀 ~ dump ~ error:", error);
        }

        try {
          await fsExtra.mkdir(dumpPath, { recursive: true });
          await fsExtra.copy(uploadsPath, dumpPath);
        } catch (error) {
          console.log("🚀 ~ dump ~ error:", error);
        }
      }

      console.log("Dumping is finished");
    },
  }),
);
