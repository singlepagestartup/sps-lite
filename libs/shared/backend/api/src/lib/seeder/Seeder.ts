import fs from "fs/promises";
import { PgTableWithColumns } from "drizzle-orm/pg-core";

export interface IModuleSeedConfig<Models> {
  seed: boolean;
  models: { name: keyof Models }[];
}

export class Seeder<S, T extends PgTableWithColumns<any>> {
  seeds = [] as any[];
  entites = [] as any[];
  seedResult = [] as any[];
  services: any;
  table: PgTableWithColumns<any>;
  type: "model" | "relation";
  seedsPath = `${__dirname}/seeds`;
  config?: {
    [key: string]: string;
  };
  seedAll = false;

  constructor({
    services,
    table,
    seedsPath,
    type = "model",
    config,
  }: {
    services: S;
    table: T;
    seedsPath?: string;
    type?: "model" | "relation";
    config?: {
      [key: string]: string;
    };
  }) {
    this.services = services;
    this.table = table;
    this.type = type;
    this.config = config;

    if (seedsPath) {
      this.seedsPath = seedsPath;
    }
    this.seedAll = process.env["SEED_ALL"] === "true";
  }

  async init() {
    const seedFiles = await fs.readdir(this.seedsPath);

    const sanitizedFiles = seedFiles.filter((file) => file.endsWith(".json"));

    for (const sanitizedFile of sanitizedFiles) {
      const seed = await fs.readFile(`${this.seedsPath}/${sanitizedFile}`, {
        encoding: "utf-8",
      });

      const parsedSeedFile = JSON.parse(seed);

      this.seeds.push(parsedSeedFile);
    }
  }

  async seed(props: {
    seedResults?: any;
    seedConfig: {
      [key: string]: IModuleSeedConfig<any>;
    };
  }) {
    await this.init();

    for (const seedEntity of this.seeds) {
      const preparedSeed = await this.prepare({
        entity: seedEntity,
        seedResults: props?.seedResults,
        seedConfig: props.seedConfig,
      });

      if (!preparedSeed) {
        continue;
      }

      const createdEntity = await this.services.create({ data: preparedSeed });

      this.entites.push(createdEntity);
      this.seedResult.push({
        seed: seedEntity,
        db: createdEntity,
      });
    }

    return this.seedResult;
  }

  async prepare({
    entity,
    seedResults,
    seedConfig,
  }: {
    entity: any;
    seedResults?: any;
    seedConfig: {
      [moduleName: string]: IModuleSeedConfig<any>;
    };
  }) {
    const preparedEntity = {} as any;

    if (this.config) {
      const relationsModelsAreSeeded = Object.entries(this.config).map(
        ([key, value]) => {
          const moduleName = value.split(".")[0];

          if (!this.seedAll) {
            if (
              !seedConfig[moduleName] ||
              seedConfig[moduleName]?.seed === false
            ) {
              return false;
            }
          }

          const modelName = value.split(".")[1];
          const relationConfig = seedConfig?.[moduleName]?.models?.find(
            (m) => m.name === modelName,
          );

          if (this.seedAll) {
            return true;
          }

          return relationConfig ? true : false;
        },
      );

      if (!relationsModelsAreSeeded.every((module) => module === true)) {
        return null;
      }
    }

    for (const [key, value] of Object.entries(this.table)) {
      if (key === "id") {
        continue;
      }

      if (this.config && this.config[key]) {
        const path = this.config[key].split(".");
        const moduleName = path[0];

        const modelName = path[1];
        const seededEntities = seedResults[moduleName][modelName];

        const existingEntity = seededEntities.find((seededEntity: any) => {
          return seededEntity.seed[path[2]] === entity[key];
        });

        if (existingEntity) {
          preparedEntity[key] = existingEntity.db[path[2]];
          continue;
        }

        throw new Error(
          "Invalid dump " +
            JSON.stringify(entity) +
            " waiting for relation entity in db with target id from config: " +
            this.config[key],
        );
      }

      if (value.columnType === "PgTimestamp") {
        preparedEntity[key] = new Date(entity[key]);

        continue;
      }

      preparedEntity[key] = entity[key];
    }

    return preparedEntity;
  }
}
