const fs = require("fs/promises");
const fsExtra = require("fs-extra");
const path = require("path");
const getDeepPopulate = require("../get-deep-populate");

/**
 * API Models seeder
 *
 * Add seed.json to /content-types/<model>, function gets all api models and their
 * seed files (/content-types/<model>/seed.json) and creates
 * entites if model is empty.
 *
 * @param {string} apiPath - path.join(__dirname, './api') if you call that function from bootstrap.js
 */
async function dumper(apiPath) {
  const apiDirs = await fs.readdir(apiPath);

  if (apiDirs.length) {
    for (const modelDirName of apiDirs) {
      await modelDumper({
        dirPath: apiPath,
        modelDirName,
        modelName: modelDirName,
        entityName: modelDirName,
        type: "api",
      });
    }
  }

  const extensionsPath = path.join(apiPath, "../extensions");
  const extensionsDirs = await fs.readdir(extensionsPath);

  if (extensionsDirs.length) {
    for (const extensionDirName of extensionsDirs) {
      const extensionDirNameIsDirectory = await isDirectory(
        path.join(extensionsPath, extensionDirName),
      );

      if (!extensionDirNameIsDirectory) {
        continue;
      }

      let contentTypeDirs = [];
      try {
        contentTypeDirs = await fs.readdir(
          path.join(extensionsPath, extensionDirName, "content-types"),
        );
      } catch (error) {
        //
      }

      let modelName = extensionDirName;
      if (extensionDirName === "plugin-i18n") {
        modelName = "i18n";
      }

      for (const contentTypeDir of contentTypeDirs) {
        await modelDumper({
          dirPath: extensionsPath,
          modelDirName: extensionDirName,
          modelName: modelName,
          entityName: contentTypeDir,
          type: "plugin",
        });
      }
    }
  }

  const corePath = path.join(apiPath, "../core");
  try {
    const coreDir = await fs.readdir(corePath);
    if (coreDir) {
      await modelDumper({
        dirPath: corePath,
        modelDirName: "core-store",
        modelName: "core-store",
        type: "strapi",
      });
    }
  } catch (error) {
    console.log("🚀 ~ dumper ~ error:", error);
  }

  if (process.env.DUMP_UPLOADS === "true") {
    const uploadsPath = path.join(apiPath, "../../public/uploads");
    const dumpPath = path.join(apiPath, "../../dump/uploads");

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
}

async function modelDumper({
  dirPath,
  modelDirName,
  modelName,
  entityName,
  type = "api",
}) {
  const pathToSeed = path.join(
    dirPath,
    `/${modelDirName}/content-types${entityName ? `/${entityName}` : ""}/seeds`,
  );

  try {
    await fs.stat(pathToSeed);
  } catch (error) {
    return;
  }

  let oldSeedFiles = await fs.readdir(pathToSeed);

  for (const oldSeedFile of oldSeedFiles) {
    if (oldSeedFile === ".gitkeep") {
      continue;
    }

    await fs.unlink(path.join(`${pathToSeed}/${oldSeedFile}`));
  }

  const uid = `${type}::${modelName}${entityName ? `.${entityName}` : ""}`;
  let entites;

  if (entityName) {
    const populate = getDeepPopulate(uid, { maxLevel: 4 });

    if (populate.localizations) {
      populate.localizations = {
        populate: {
          ...populate,
        },
      };
    }

    entites = await strapi.entityService.findMany(uid, {
      populate,
      pagination: {
        limit: -1,
      },
    });
  } else {
    entites = await strapi.db.query(uid).findMany();
  }

  if (Array.isArray(entites)) {
    for (const entity of entites) {
      const json = JSON.stringify(entity, null, 4);
      const fileName = `${pathToSeed}/${entity.id}.json`;

      await fs
        .writeFile(`${pathToSeed}/${entity.id}.json`, json)
        .catch((error) => {
          console.log("🚀 ~ modelDumper ~ error", error);
        });

      console.log("🚀 ~ modelDumper ~ new seed created", fileName);
    }
  } else if (entites && typeof entites === "object") {
    const json = JSON.stringify(entites, null, 4);
    const fileName = `${pathToSeed}/${entites.id}.json`;

    await fs.writeFile(fileName, json).catch((error) => {
      console.log("🚀 ~ modelDumper ~ error", error);
    });

    console.log("🚀 ~ modelDumper ~ new seed created", fileName);
  }
}

module.exports = dumper;

async function isDirectory(p) {
  try {
    return await fs.readdir(p);
  } catch (err) {
    return false;
  }
}
