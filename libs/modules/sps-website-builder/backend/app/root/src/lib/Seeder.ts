import { models } from "@sps/sps-website-builder-backend-models";

export class Seeder {
  models: typeof models;
  seedResults: any;
  name = "spsWebsiteBuilder";

  constructor({ seedResults }: { seedResults: any }) {
    this.models = models;
    this.seedResults = seedResults;

    this.seedResults[this.name] = {};
  }

  async seedModels() {
    await this.clear();

    for (const [modelName, model] of Object.entries(this.models)) {
      if ("type" in model) {
        if (model.type === "model") {
          this.seedResults[this.name][modelName] = await model.services.seed();
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
          });
        }
      }
    }
  }

  async clear() {
    for (const [modelName, model] of Object.entries(this.models)) {
      const entities = await model.services.find();

      for (const entity of entities) {
        await model.services.delete({
          id: entity.id,
        });
      }
    }
  }
}
