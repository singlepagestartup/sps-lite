import { drizzle } from "drizzle-orm/postgres-js";
import { postgres } from "@sps/shared-backend-database-config";
import * as schema from "@sps/sps-website-builder-backend-schema";
import * as modelSchema from "@sps/sps-website-builder-models-page-backend-schema";
import { modelFactories } from "@sps/shared-backend-api";

export const db = drizzle(postgres, { schema });
export const modelName = modelSchema.name;
export const Table = schema[`${modelName}Table`];
export const Relations = schema[`${modelName}Relations`];
export const populate = modelSchema.populate;
export const transformData = modelSchema.transformData;

export const model = modelFactories.crudModelFactory({
  db,
  modelName,
  Table,
  Relations,
  config: modelSchema.config,
  populate,
  transformData,
});
