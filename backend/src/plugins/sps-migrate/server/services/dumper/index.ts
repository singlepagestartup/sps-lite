/**
 * dumper service
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreService(
  "plugin::sps-migrate.dumper",
  ({ strapi }) => ({
    async run() {
      console.log("Dumping is started");

      // const allowedContentTypes: any = [
      //   // "plugin::sps-website-builder.page",
      //   "plugin::sps-website-builder.layout",
      //   "plugin::sps-website-builder.slide-over",
      //   // "plugin::sps-website-builder.flyout",
      //   // "plugin::sps-crm.form",
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
        "plugin::users-permissions.role",
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

      console.log("Dumping is finished");
    },
  }),
);
