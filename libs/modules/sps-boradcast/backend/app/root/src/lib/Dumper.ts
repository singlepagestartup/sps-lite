import { models } from "@sps/sps-boradcast/backend/models/root";

export class Dumper {
  models: typeof models;
  name = "spsBoradcast";

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
