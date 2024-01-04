const fs = require("fs/promises");
const Seeder = require("./Seeder");
const path = require("path");

/**
 * API Models seeder
 *
 * Add seed.json to /content-types/<model>, function gets all api models and their
 * seed files (/content-types/<model>/seed.json) and creates
 * entites if model is empty.
 *
 * @param {string} apiPath - path.join(__dirname, './api') if you call that function from bootstrap.js
 */
async function seeder(apiPath) {
  console.log("Seeding is started");

  const extensionsPath = path.join(apiPath, "../extensions");
  const extensionsDirs = await fs.readdir(extensionsPath);
  if (extensionsDirs.length) {
    const seededModelNames = [];
    const seededModels = {};

    for (const extensionDirName of extensionsDirs) {
      if (extensionDirName === "plugin-i18n") {
        try {
          const seed = new Seeder({
            modelDirName: extensionDirName,
            modelName: "i18n",
            entityName: "locale",
            dirPath: extensionsPath,
            type: "plugin",
            seededModelNames,
            seededModels,
          });
          await seed.setSchema();
          await seed.setSeed();
          await seed.seedEntites();
        } catch (error) {
          console.log("🚀 ~ seeder ~ error", extensionDirName, error?.message);
        }
      } else if (extensionDirName === "sps-website-builder") {
        const contentTypeDirs = await fs.readdir(
          path.join(extensionsPath, extensionDirName, "content-types"),
        );
        const seededModelNames = [];
        const seededModels = {};

        for (const contentTypeDir of contentTypeDirs) {
          try {
            const seed = new Seeder({
              modelDirName: extensionDirName,
              modelName: extensionDirName,
              entityName: contentTypeDir,
              dirPath: extensionsPath,
              type: "plugin",
              seededModelNames,
              seededModels,
            });
            await seed.setSchema();
            await seed.setSeed();
            await seed.seedEntites();
          } catch (error) {
            console.log("🚀 ~ seeder ~ error", contentTypeDir, error?.message);
          }
        }
      }
    }
  }

  const corePath = path.join(apiPath, "../core");
  const coreDirs = await fs.readdir(corePath);
  if (coreDirs.length) {
    const seededModelNames = [];
    const seededModels = {};

    for (const coreDirName of coreDirs) {
      if (coreDirName === "core-store") {
        try {
          const seed = new Seeder({
            modelDirName: coreDirName,
            modelName: coreDirName,
            dirPath: corePath,
            type: "strapi",
            seededModelNames,
            seededModels,
          });
          await seed.setSchema();
          await seed.setSeed();
          await seed.seedEntites();
        } catch (error) {
          console.log("🚀 ~ seeder ~ error", coreDirName, error?.message);
        }
      }
    }
  }

  const apiDirs = await fs.readdir(apiPath);

  if (apiDirs.length) {
    const seededModelNames = [];
    const seededModels = {};

    for (const modelDirName of apiDirs) {
      if ([".DS_Store", ".gitkeep"].includes(modelDirName)) {
        continue;
      }

      try {
        const seed = new Seeder({
          modelDirName,
          modelName: modelDirName,
          entityName: modelDirName,
          dirPath: apiPath,
          type: "api",
          seededModelNames,
          seededModels,
        });
        await seed.setSchema();
        await seed.setSeed();
        await seed.seedEntites();
      } catch (error) {
        console.log("🚀 ~ seeder ~ error", modelDirName, error?.message);
      }
    }
  }

  console.log("Seeding is finished");
}

module.exports = seeder;
