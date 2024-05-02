import { drizzle } from "drizzle-orm/postgres-js";
import { postgres } from "@sps/shared-backend-database-config";
import * as schema from "@sps/sps-website-builder-backend-schema";
import * as modelSchema from "@sps/sps-website-builder-models-slide-backend-schema";
import { Table } from "@sps/sps-website-builder-models-slide-backend-schema-table";
import { modelFactories } from "@sps/shared-backend-api";

export const db = drizzle(postgres, { schema });
export const transformData = modelSchema.transformData;

export const model = modelFactories.crudModelFactory({
  db,
  Table,
});
