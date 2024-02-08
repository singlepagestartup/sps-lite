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
    async downloadFile({ seed, uid }: { seed: any; uid: string }) {
      if (!seed) {
        return;
      }

      if (Array.isArray(seed)) {
        const createdFiles: any = [];

        for (const fileValue of seed) {
          const createdFile = await this.downloadFile({
            seed: fileValue,
            uid,
          });

          if (!createdFile) {
            continue;
          }

          createdFiles.push(createdFile);
        }

        return createdFiles;
      } else {
        const additionalAttributes = {};
        if (seed?.headers) {
          if (Object.keys(seed.headers)?.length) {
            additionalAttributes["headers"] = { ...seed.headers };
          }
        }

        let file;
        if (seed.url.includes("http")) {
          file = await axios({
            method: "GET",
            url: seed.url,
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
          return;

          const { dirPath } = strapi
            .service("plugin::sps-migrate.seeder")
            .splitUid({ uid });

          const pathToRoot = path.join(dirPath, "../../"); //?

          file = await fs
            .readFile(`${pathToRoot}/dump/${seed.url}`)
            .catch((error) => {
              console.log("🚀 ~ downloadFile ~ error:", error?.message);
            });
        }

        if (!file) {
          return;
        }

        const fileMeta = {
          name: seed.name.toLowerCase(),
          type: seed.mime,
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
  }),
);
