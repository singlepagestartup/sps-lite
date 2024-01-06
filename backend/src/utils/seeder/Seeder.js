const axios = require("axios");
const fs = require("fs/promises");
const path = require("path");

class Seeder {
  constructor({
    modelName,
    dirPath,
    type = "api",
    modelDirName,
    entityName,
    skipModels,
    seededModels,
  }) {
    this.modelDirName = modelDirName;
    this.entityName = entityName;
    this.modelName = modelName;
    this.dirPath = dirPath;
    this.skipModels = skipModels;
    this.seededModels = seededModels;
    this.type = type;
    this.uid = `${type}::${modelName}${entityName ? `.${entityName}` : ""}`;
  }

  async setSeed() {
    const pathToSeed = path.join(
      this.dirPath,
      `/${this.modelDirName}/content-types${
        this.entityName ? `/${this.entityName}` : ""
      }/seeds`,
    );

    let seedFiles;
    try {
      seedFiles = await fs.readdir(pathToSeed);
    } catch (error) {
      return;
      // console.log('🚀 ~ setSeed ~ no seed for model:', this.modelName, ' skipping migration');
    }

    if (
      !seedFiles?.length ||
      !seedFiles?.filter((s) => s.includes(".json"))?.length
    ) {
      this.seed = [];
      return;
    }

    if (
      this.schema.kind === "singleType" &&
      seedFiles.filter((s) => s.includes(".json")).length > 1
    ) {
      throw new Error("Single Type entity can have just one json file");
    }

    for (const seedFile of seedFiles) {
      if (!seedFile.includes(".json")) {
        continue;
      }

      const seed = await fs
        .readFile(`${pathToSeed}/${seedFile}`, "utf8")
        .catch((error) => {
          // console.log(`🚀 ~ seed ~ error`, error);
        });

      if (
        this.schema.kind === "collectionType" ||
        this.modelDirName === "plugin-i18n"
      ) {
        if (!this.seed) {
          this.seed = [];
        }

        this.seed = [...this.seed, JSON.parse(seed)];
      } else {
        this.seed = JSON.parse(seed);
      }
    }
  }

  async setSchema() {
    if (this.uid.includes("plugin")) {
      this.schema = strapi.plugin(this.modelName).contentTypes[
        this.entityName
      ].__schema__;

      return;
    }

    const pathToSchema = path.join(
      this.dirPath,
      `/${this.modelDirName}/content-types${
        this.entityName ? `/${this.entityName}` : ""
      }/schema.json`,
    ); //?
    const schema = await fs.readFile(pathToSchema, "utf8").catch((error) => {
      // console.log(`🚀 ~ seed ~ error`, error);
    }); //?

    try {
      this.schema = JSON.parse(schema);
    } catch (error) {
      // console.log('🚀 ~ setSchema ~ error:', error);
    }
  }

  async getSchema(model) {
    if (model.includes("plugin")) {
      return strapi.plugin(this.modelName).contentTypes[this.entityName]
        .__schema__;
    }

    if (model.includes("strapi::")) {
      return;
    }

    const modelName = model.split("::")[1].split(".")[0];

    const pathToSchema = path.join(
      this.dirPath,
      `/${modelName}/content-types${
        modelName ? `/${modelName}` : ""
      }/schema.json`,
    ); //?

    const schema = await fs.readFile(pathToSchema, "utf8").catch((error) => {
      // console.log(`🚀 ~ seed ~ error`, error);
    }); //?

    return JSON.parse(schema);
  }

  async seedEntites() {
    const createdEntites = [];
    this.seed; //?
    if (!this.seed) {
      this.seededModels[this.modelName] = undefined;
      return;
    }

    // if (this.modelName === 'product') {
    //     console.log('🚀 ~ seedEntites ~ this.modelName:', this.modelName);
    // }

    if (
      this.schema.kind === "collectionType" ||
      this.modelDirName === "plugin-i18n"
    ) {
      for (const seedItem of this.seed) {
        const sanitizedSeed = { ...seedItem };

        if (sanitizedSeed.localizations) {
          sanitizedSeed.localizations = [];
          sanitizedSeed.seeder_filter_by = [
            ...(sanitizedSeed.seeder_filter_by || []),
            "locale",
          ];
        }

        const entity = new Entity({
          seed: sanitizedSeed,
          schema: this.schema,
          seeder: this,
        });
        const mainEntityCreated = await entity.create();

        if (mainEntityCreated) {
          createdEntites.push({
            old: seedItem,
            new: mainEntityCreated,
          });
        }

        if (seedItem?.localizations?.length) {
          for (const localization of seedItem.localizations) {
            const sanitizedLocalizationSeed = {
              ...localization,
              seeder_filter_by: [
                ...(localization.seeder_filter_by || []),
                "locale",
              ],
            };

            const entity = new Entity({
              seed: sanitizedLocalizationSeed,
              schema: this.schema,
              seeder: this,
            });

            const created = await entity.create();
            if (created) {
              createdEntites.push({
                old: localization,
                new: created,
              });
            }

            const mainEntity = await strapi.entityService.update(
              this.uid,
              mainEntityCreated.id,
              {
                populate: {
                  localizations: {
                    populate: "*",
                  },
                },
              },
            );

            await strapi.db.query(this.uid).update({
              where: { id: created.id },
              data: {
                localizations: [
                  ...mainEntity.localizations.filter(
                    (localization) => localization.locale !== created.locale,
                  ),
                  mainEntity.id,
                ],
              },
            });

            await strapi.db.query(this.uid).update({
              where: { id: mainEntity.id },
              data: {
                localizations: [...mainEntity.localizations, created.id],
              },
            });

            for (const mainEntityLocalization of mainEntity.localizations) {
              await strapi.db.query(this.uid).update({
                where: { id: mainEntityLocalization.id },
                data: {
                  localizations: [
                    ...mainEntityLocalization.localizations.filter(
                      (localization) =>
                        localization.locale !== mainEntityLocalization.locale,
                    ),
                    created.id,
                  ],
                },
              });
            }
          }
        }
      }
    } else if (this.schema.kind === "singleType") {
      const sanitizedSeed = { ...this.seed };

      if (sanitizedSeed.localizations) {
        sanitizedSeed.localizations = [];
        sanitizedSeed.seeder_filter_by = ["locale"];
      }

      const entity = new Entity({
        seed: sanitizedSeed,
        schema: this.schema,
        seeder: this,
      });
      const mainEntityCreated = await entity.create();

      if (mainEntityCreated) {
        createdEntites.push({
          old: this.seed,
          new: mainEntityCreated,
        });
      }

      if (this.seed?.localizations?.length) {
        for (const localization of this.seed.localizations) {
          const entity = new Entity({
            seed: { ...localization, seeder_filter_by: ["locale"] },
            schema: this.schema,
            seeder: this,
          });
          const created = await entity.create();
          if (created) {
            createdEntites.push({
              old: localization,
              new: created,
            });
          }

          const mainEntity = await strapi.entityService.update(
            this.uid,
            mainEntityCreated.id,
            {
              populate: {
                localizations: {
                  populate: "*",
                },
              },
            },
          );

          await strapi.db.query(this.uid).update({
            where: { id: created.id },
            data: {
              localizations: [
                ...mainEntity.localizations.filter(
                  (localization) => localization.locale !== created.locale,
                ),
                mainEntity.id,
              ],
            },
          });

          await strapi.db.query(this.uid).update({
            where: { id: mainEntity.id },
            data: {
              localizations: [...mainEntity.localizations, created.id],
            },
          });

          for (const mainEntityLocalization of mainEntity.localizations) {
            await strapi.db.query(this.uid).update({
              where: { id: mainEntityLocalization.id },
              data: {
                localizations: [
                  ...mainEntityLocalization.localizations.filter(
                    (localization) =>
                      localization.locale !== mainEntityLocalization.locale,
                  ),
                  created.id,
                ],
              },
            });
          }
        }
      }
    }
    const createdIds = createdEntites.map((createdEntity) => {
      return createdEntity.new.id;
    });

    const entites = await strapi.db.query(this.uid).findMany();

    if (entites?.length) {
      for (const entity of entites) {
        if (createdIds.includes(entity.id)) {
          continue;
        }

        await strapi.db.query(this.uid).delete({ where: { id: entity.id } });
      }
    }

    this.seededModels[this.modelName] = createdEntites;
    return createdEntites;
  }
}

class Entity {
  constructor({ seed, schema, seeder, updateEntityIfExists = true }) {
    this.seed = seed; //?
    this.schema = schema; //?
    this.data = {};
    this.seeder = seeder;
    this.updateEntityIfExists = updateEntityIfExists;
    this.keysToSkip = [
      "id",
      "createdAt",
      "updatedAt",
      "createdBy",
      "updatedBy",
    ];
  }

  async prepare() {
    for (const seedKey of Object.keys(this.seed)) {
      const parameter = new Parameter({
        schema: this.schema,
        key: seedKey,
        seedValue: this.seed[seedKey],
        entity: this,
        seeder: this.seeder,
      });
      await parameter.prpare();

      if (parameter.value) {
        this.data[seedKey] = parameter.value;
      }
    }
  }

  async create() {
    await this.prepare();

    if (this.data) {
      // console.log('🚀 ~ create ~ this.seeder.modelName:', this.seeder.uid);

      const schema = await this.seeder.getSchema(this.seeder.uid);
      const filters = setFilters({
        entity: this.data,
        toSkip: this.keysToSkip,
        seeder: this.seeder,
        schema,
      });

      // console.log('🚀 ~ create ~ filters:', filters);

      let existingEntities;

      if (Object.keys(filters)?.length) {
        existingEntities = await strapi.db.query(this.seeder.uid).findMany({
          where: filters,
        });
      }

      if (existingEntities?.length) {
        if (this.updateEntityIfExists) {
          try {
            if (this.seeder.entityName) {
              const updatedEntity = await strapi.entityService.update(
                this.seeder.uid,
                existingEntities[0].id,
                { data: this.data },
              );

              return updatedEntity;
            } else {
              const updatedEntity = await strapi.db
                .query(this.seeder.uid)
                .update({
                  where: { id: existingEntities[0].id },
                  data: this.data,
                });

              return updatedEntity;
            }
          } catch (error) {
            console.log(
              `🚀 ~ Entity ${this.seeder.modelName} ~ update ~ error.message:`,
              error.message,
            );
          }
        } else {
          return existingEntities[0];
        }
      }

      try {
        if (this.seeder.entityName) {
          const createdEntity = await strapi.entityService.create(
            this.seeder.uid,
            {
              data: this.data,
            },
          );

          return createdEntity;
        } else {
          const createdEntity = await strapi.db.query(this.seeder.uid).create({
            data: this.data,
          });

          return createdEntity;
        }
      } catch (error) {
        console.log(
          `🚀 ~ Entity ${this.seeder.modelName} ~ create ~ error.message:`,
          error.message,
        );
      }
    }
  }
}

class Parameter {
  constructor({ schema, key, seedValue, entity, seeder }) {
    this.schema = schema;
    this.key = key;
    this.seedValue = seedValue;
    this.seeder = seeder;
    this.entity = entity;
  }

  setAttributes() {
    this.attributes = this.schema.attributes[this.key]; //?
  }

  setType() {
    this.setAttributes();
    this.type = this.attributes?.type;
  }

  setValue(value) {
    value; //?

    if (
      this.attributes?.multiple === true ||
      ["manyToMany", "oneToMany"].includes(this.attributes?.relation) ||
      this.type === "dynamiczone" ||
      this.attributes?.repeatable === true
    ) {
      if (!this.value) {
        this.value = [];
      }

      if (Array.isArray(value)) {
        for (const val of value) {
          this.value.push(val);
        }
      } else {
        this.value.push(value);
      }
    } else {
      this.value = value; //?
    }
  }

  async prpare() {
    this.setType();

    this.key; //?
    this.type; //?

    if (this.entity.keysToSkip.includes(this.key)) {
      return;
    }

    this.key; //?
    this.type; //?
    this.attributes; //?

    if (this.type === "media") {
      await this.downloadFile(this.seedValue);
      return;
    } else if (this.type === "relation") {
      await this.seedRelations();
      return;
    } else if (this.key === "localizations") {
      const localizationsContent = await this.seedLocalizations(); //?
      this.setValue(localizationsContent);
      return;
    } else if (this.type === "dynamiczone" || this.type === "component") {
      const componentsContent = await this.seedComponents(); //?
      this.setValue(componentsContent);
      return;
    } else if (this.type === "uid") {
      // generate unique uid
      // this.setValue(`${this.seedValue}-${Math.floor(Math.random() * 10e10)}`);
      this.setValue(this.seedValue);
      return;
    } else {
      this.setValue(this.seedValue);
      return;
    }
  }

  async seedRelations() {
    this.key; //?
    this.type; //?
    this.attributes; //?
    this.seedValue; //?
    const targetType = this.attributes.target.split("::")[0];
    const targetModelName = this.attributes.target.split("::")[1].split(".")[0]; //?
    const targetEntityName = this.attributes.target
      .split("::")[1]
      .split(".")[1]; //?

    // console.log('🚀 ~ seedRelations ~ targetModelName:', targetModelName);

    const alsoSeededModels = Object.keys(
      this.entity.seeder.seededModels,
    ).filter((modelName) => modelName === targetModelName); //?

    if (
      alsoSeededModels?.length === 0 &&
      targetModelName !== this.entity.seeder.modelName &&
      (this.entity.seeder.schema.attributes[this.key]?.mappedBy ===
        this.entity.seeder.modelName ||
        this.entity.data.__component)
      // !this.entity.seeder?.skipModels?.includes(targetModelName) &&
    ) {
      const seed = new Seeder({
        type: targetType,
        modelDirName: targetModelName,
        modelName: targetModelName,
        entityName: targetEntityName,
        dirPath: this.entity.seeder.dirPath,
        skipModels: [
          ...(this.entity.seeder?.skipModels || []),
          this.entity.seeder.modelName,
        ].filter((model) => {
          return model !== targetModelName;
        }),
        seededModels: this.entity.seeder.seededModels,
      });
      await seed.setSchema();
      if (!seed.schema) {
        return;
      }

      await seed.setSeed();
      await seed.seedEntites();
    }

    if (!this.seedValue) {
      return;
    }

    if (Array.isArray(this.seedValue)) {
      if (!this.seedValue?.length) {
        return;
      }

      for (const relationSeedValue of this.seedValue) {
        let id;
        if (relationSeedValue.id) {
          id = this.entity.seeder.seededModels[targetModelName]?.find(
            (seededItems) => {
              if (seededItems.old.id === relationSeedValue.id) {
                return true;
              }
            },
          )?.new?.id;
        }
        const schema = await this.seeder.getSchema(this.attributes.target);
        const filters = setFilters({
          entity: relationSeedValue,
          toSkip: this.entity.keysToSkip,
          seeder: this.entity.seeder,
          id,
          schema,
        });
        const [relationEntity] = await strapi.db
          .query(this.attributes.target)
          .findMany({
            where: filters,
          });

        if (relationEntity) {
          this.setValue(relationEntity);
        }
      }
    } else {
      let id;
      if (this.seedValue.id) {
        id = this.entity.seeder.seededModels[targetModelName]?.find(
          (seededItems) => {
            if (seededItems.old.id === this.seedValue.id) {
              return true;
            }
          },
        )?.new?.id;
      }
      const schema = await this.seeder.getSchema(this.attributes.target);
      const filters = setFilters({
        entity: this.seedValue,
        toSkip: this.entity.keysToSkip,
        seeder: this.entity.seeder,
        id,
        schema,
      });

      filters; //?
      const [relationEntity] = await strapi.db
        .query(this.attributes.target)
        .findMany({
          where: filters,
        });

      if (relationEntity) {
        this.setValue(relationEntity);
      }
    }

    this.entity.seeder.modelName; //?
  }

  async seedLocalizations() {
    const localizations = [];

    for (const localizationSeedValue of this.seedValue) {
      this.entity.seeder.dirPath; //?
      this.seedValue; //?
      this.attributes; //?
      localizationSeedValue; //?
      delete localizationSeedValue.localizations;

      this.seedValue; //?

      let id;
      if (localizationSeedValue.id) {
        id = this.entity.seeder.seededModels[
          this.entity.seeder.modelName
        ]?.find((seededItems) => {
          if (seededItems.old.id === localizationSeedValue.id) {
            return true;
          }
        })?.new?.id;
      }
      const schema = await this.seeder.getSchema(this.entity.seeder.uid);
      const filters = setFilters({
        entity: { ...localizationSeedValue },
        toSkip: this.entity.keysToSkip,
        seeder: this.entity.seeder,
        id,
        schema,
      });

      filters; //?
      const relationEntities = await strapi.db
        .query(this.entity.seeder.uid)
        .findMany({
          where: filters,
        });

      if (relationEntities?.length) {
        localizations.push(relationEntities[0]);
      }
    }

    return localizations;
  }

  async seedComponents() {
    if (!this.seedValue) {
      return;
    }

    if (Array.isArray(this.seedValue)) {
      const components = [];

      for (const dzSeedValue of this.seedValue) {
        this.entity.seeder.dirPath; //?
        this.seedValue; //?
        this.attributes; //?
        dzSeedValue; //?
        let componentPath;

        if (dzSeedValue?.__component) {
          componentPath = dzSeedValue.__component.replace(".", "/"); //?
        } else if (this.attributes?.component) {
          componentPath = this.attributes.component.replace(".", "/"); //?
        } else {
          return;
        }

        const pathToSchema = path.join(
          this.entity.seeder.dirPath,
          `../components/${componentPath}.json`,
        ); //?
        const schema = await fs
          .readFile(pathToSchema, "utf8")
          .catch((error) => {
            // console.log(`🚀 ~ seed ~ error`, error);
          }); //?

        this.seedValue; //?

        const entity = new Entity({
          seed: dzSeedValue,
          schema: JSON.parse(schema),
          seeder: this.entity.seeder,
        }); //?

        await entity.prepare();

        components.push(entity.data);
      }

      return components;
    } else {
      let componentPath;

      if (this.seedValue?.__component) {
        componentPath = this.seedValue.__component.replace(".", "/"); //?
      } else if (this.attributes?.component) {
        componentPath = this.attributes.component.replace(".", "/"); //?
      } else {
        return;
      }

      const pathToSchema = path.join(
        this.entity.seeder.dirPath,
        `../components/${componentPath}.json`,
      ); //?
      const schema = await fs.readFile(pathToSchema, "utf8").catch((error) => {
        // console.log(`🚀 ~ seed ~ error`, error);
      }); //?

      this.seedValue; //?

      const entity = new Entity({
        seed: this.seedValue,
        schema: JSON.parse(schema),
        seeder: this.entity.seeder,
      }); //?

      await entity.prepare();

      return entity.data;
    }
  }

  async downloadFile(value) {
    if (!value) {
      return;
    }

    if (Array.isArray(value)) {
      for (const fileValue of value) {
        await this.downloadFile(fileValue);
      }
    } else {
      let additionalAttributes = {};
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
        const pathToRoot = path.join(this.entity.seeder.dirPath, "../../"); //?

        file = await fs
          .readFile(`${pathToRoot}/dump/${value.url}`)
          .catch((error) => {
            console.log("🚀 ~ downloadFile ~ error:", error?.message);
          });
      }

      // console.log('🚀 ~ downloadFile ~ value:', value);

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

      this.setValue(createdFile);
    }
  }
}

module.exports = Seeder;

function setFilters({ entity, toSkip = [], id, schema }) {
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
}
