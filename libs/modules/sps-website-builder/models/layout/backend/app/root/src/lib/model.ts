import { drizzle } from "drizzle-orm/postgres-js";
import { postgres } from "@sps/shared-backend-database-config";
import * as schema from "@sps/sps-website-builder-backend-schema";
import * as modelSchema from "@sps/sps-website-builder-models-layout-backend-schema";
import { eq } from "drizzle-orm";

export const db = drizzle(postgres, { schema });
export const Table = schema.LayoutTable;
export const Relations = schema.LayoutRelations;
export const populate = modelSchema.populate;
export const transformData = modelSchema.transformData;
export const modelName = modelSchema.name;

async function getById(id: string, withInput: any) {
  const data = db.query[modelName].findFirst({
    where: eq(Table.id, id),
    with: withInput,
  });

  const transformedData = transformData({ data });

  return transformedData;
}

async function get() {
  const data = await db.query[modelSchema.name].findMany({ with: populate });

  const transformedData: typeof data = [];

  for (const item of data) {
    transformedData.push(transformData({ data: item }) as any);
  }

  return transformedData;
}

export const model = {
  async get() {
    const data = await get();

    return data;
  },
  async getById({ id }) {
    const data = await getById(id, populate);

    return data;
  },
};
