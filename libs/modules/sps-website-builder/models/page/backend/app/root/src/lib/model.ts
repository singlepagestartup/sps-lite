import { drizzle } from "drizzle-orm/postgres-js";
import { postgres } from "@sps/shared-backend-database-config";
import * as schema from "@sps/sps-website-builder-backend-schema";
import * as model from "@sps/sps-website-builder-models-page-backend-schema";
import { eq } from "drizzle-orm";

export const db = drizzle(postgres, { schema });
export const Table = schema.PageTable;
export const Relations = schema.PageRelations;
export const populate = model.populate;
export const transformData = model.transformData;
export const modelName = model.name;

export async function getById(id: string, withInput: any) {
  return db.query[modelName].findFirst({
    where: eq(Table.id, id),
    with: withInput,
  });
}
