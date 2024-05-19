import { models } from "@sps/sps-website-builder-backend-models";

export class Dumper {
  models: typeof models;
  name = "sps-website-builder";

  constructor() {
    this.models = models;
  }

  async dumpModels() {
    for (const [modelName, model] of Object.entries(this.models)) {
      if ("type" in model) {
        if (model.type === "model") {
          if ("dump" in model.services) {
            await model.services.dump();
          }
        }
      }
    }
  }

  // async dumpRelations() {
  //   for (const [modelName, model] of Object.entries(this.models)) {
  //     if ("type" in model) {
  //       if (model.type === "relation") {
  //         await model.services.dump();
  //       }
  //     }
  //   }
  // }
}
