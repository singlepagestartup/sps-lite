import { models } from "@sps/sps-rbac/backend/models/root";
import { config } from "./config";
import { ModuleSeeder as ParentModuleSeeder } from "@sps/shared-backend-api";

export class ModuleSeeder extends ParentModuleSeeder<typeof models> {
  constructor({
    seedResults,
    seedConfig,
  }: {
    seedResults: any;
    seedConfig: any;
  }) {
    super({
      name: "spsRbac",
      config,
      models,
      seedResults,
      seedConfig,
    });
  }
}
