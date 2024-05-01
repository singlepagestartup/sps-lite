import { drizzle } from "drizzle-orm/postgres-js";
import { postgres } from "@sps/shared-backend-database-config";
import * as schema from "@sps/sps-website-builder-backend-schema";
import * as modelSchema from "@sps/sps-website-builder-models-page-backend-schema";
import { modelFactories } from "@sps/shared-backend-api";

export const db = drizzle(postgres, { schema });
db.query.PageTable;
export const modelName = modelSchema.name;
export const Table = schema.PageTable;
export const populate = modelSchema.populate;
export const transformData = modelSchema.transformData;

export const model = modelFactories.crudModelFactory<typeof schema>({
  db,
  modelName,
  Table,
  populate,
  transformData,
});
