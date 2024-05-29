import { IModuleSeedConfig } from "./Seeder";

interface IModel {
  [key: string]: {
    type: string;
    services: any;
  };
}

export class ModuleSeeder<Models extends IModel> {
  models: Models;
  seedResults: any;
  name = "";
  seedConfig: {
    [key: string]: IModuleSeedConfig<Models>;
  };
  config: IModuleSeedConfig<Models>;
  seedAll = false;

  constructor({
    name,
    config,
    models,
    seedResults,
    seedConfig,
  }: {
    name: string;
    config: IModuleSeedConfig<Models>;
    models: Models;
    seedResults: any;
    seedConfig: any;
  }) {
    this.name = name;
    this.models = models;
    this.seedResults = seedResults;

    seedConfig[this.name] = config;
    this.config = config;
    this.seedConfig = seedConfig;
    this.seedResults[this.name] = {};
    this.seedAll = process.env["SEED_ALL"] === "true";
  }

  async seedModels() {
    for (const [modelName, model] of Object.entries(this.models)) {
      if ("type" in model) {
        if (model.type === "model") {
          if (
            this.config.models.find((m) => m.name === modelName) ||
            this.seedAll
          ) {
            await this.clear({ model } as { model: Models[keyof Models] });
            this.seedResults[this.name][modelName] = await model.services.seed({
              seedConfig: this.seedConfig,
            });
          }
        }
      }
    }
  }

  async seedRelations() {
    for (const [modelName, model] of Object.entries(this.models)) {
      if ("type" in model) {
        if (model.type === "relation") {
          this.seedResults[this.name][modelName] = await model.services.seed({
            seedResults: this.seedResults,
            seedConfig: this.seedConfig,
          });
        }
      }
    }
  }

  async clear({ model }: { model: Models[keyof Models] }) {
    const entities = await model.services.find();

    for (const entity of entities) {
      await model.services.delete({
        id: entity.id,
      });
    }
  }
}
