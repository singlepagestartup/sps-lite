import { drizzle } from "drizzle-orm/postgres-js";
import { postgres } from "@sps/shared-backend-database-config";
import {
  LayoutTable,
  LayoutRelations,
} from "@sps/sps-website-builder-models-layout-backend-schema";
// import { schema as spsWbSchema } from "@sps/sps-website-builder-backend-schema-extended";

export const model = LayoutTable;
export const modelExtended = LayoutRelations;

export const schema = {
  model,
  modelExtended,
};

export const db = drizzle(postgres, {
  schema,
});
