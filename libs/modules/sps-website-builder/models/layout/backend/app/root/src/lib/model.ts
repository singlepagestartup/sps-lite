import { drizzle } from "drizzle-orm/postgres-js";
import { postgres } from "@sps/shared-backend-database-config";
import * as schema from "@sps/sps-website-builder-backend-schema";
import * as model from "@sps/sps-website-builder-models-layout-backend-schema";

export const db = drizzle(postgres, { schema });
export const Table = schema.LayoutTable;
export const Relations = schema.LayoutRelations;
export const populate = model.populate;
export const transformData = model.transformData;
export const modelName = model.name;
