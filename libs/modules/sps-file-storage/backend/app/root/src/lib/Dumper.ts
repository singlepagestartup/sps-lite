import { models } from "@sps/sps-file-storage-backend-models";

export class Dumper {
  models: typeof models;
  name = "sps-file-storage";

  constructor() {
    this.models = models;
  }

  async dumpModels() {
    for (const [modelName, model] of Object.entries(this.models)) {
      if ("type" in model) {
        if ("dump" in model.services) {
          await model.services.dump();
        }
      }
    }
  }
}
