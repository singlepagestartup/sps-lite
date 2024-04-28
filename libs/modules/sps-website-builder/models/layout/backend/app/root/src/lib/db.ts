import { drizzle } from "drizzle-orm/postgres-js";
import { postgres } from "@sps/shared-backend-database-config";
import { Tables as LayoutTables } from "@sps/sps-website-builder-models-layout-backend-schema";
// import { schema as spsWbSchema } from "@sps/sps-website-builder-backend-schema-extended";

export const model = LayoutTables.Plain;
export const modelExtended = LayoutTables.Relations;

export const schema = {
  model,
  modelExtended,
};

export const db = drizzle(postgres, {
  schema,
});
