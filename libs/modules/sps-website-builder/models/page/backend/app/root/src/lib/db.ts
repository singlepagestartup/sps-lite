import { drizzle } from "drizzle-orm/postgres-js";
import { postgres } from "@sps/shared-backend-database-config";
import { schema } from "@sps/sps-website-builder-models-page-backend-schema";
// import { schema as spsWbSchema } from "@sps/sps-website-builder-backend-schema-extended";

export const model = schema.plain;
export const modelExtended = schema.extended;

export const db = drizzle(postgres, {
  schema: { model, modelExtended },
});
