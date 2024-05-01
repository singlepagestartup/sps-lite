// @ts-nocheck
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";

interface IHandlerParams {
  db: PostgresJsDatabase<any>;
  modelName: string;
  populate: {
    [key: string]: any;
  };
  transformData: (data: any) => any;
}

async function find({
  db,
  modelName,
  populate,
  transformData,
}: IHandlerParams) {
  const data = await db.query[modelName].findMany({ with: populate });

  const transformedData: typeof data = [];

  for (const item of data) {
    transformedData.push(transformData({ data: item }) as any);
  }

  return transformedData;
}

export async function handler(params: IHandlerParams) {
  const data = await find(params);

  return data;
}
