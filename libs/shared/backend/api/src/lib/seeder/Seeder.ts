import fs from "fs/promises";
import { PgTableWithColumns } from "drizzle-orm/pg-core";
import { checkIsModuleShouldNotSeed } from "@sps/sps-backend-utils";

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

  async seed(props?: { seedResults?: any }) {
    await this.init();

    for (const seedEntity of this.seeds) {
      const preparedSeed = await this.prepare({
        entity: seedEntity,
        seedResults: props?.seedResults,
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

  async prepare({ entity, seedResults }: { entity: any; seedResults?: any }) {
    const preparedEntity = {} as any;

    if (this.config) {
      const relateToModulesSkipSeeding = Object.entries(this.config)
        .map(([key, value]) => {
          return value.split(".")[0];
        })
        .map((moduleName) => {
          return checkIsModuleShouldNotSeed({ name: moduleName });
        });

      if (!relateToModulesSkipSeeding.every((module) => module === false)) {
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
