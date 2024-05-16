import { db } from "@sps/sps-db-provider";
import {
  populate,
  modelName,
  Table,
} from "@sps/sps-website-builder-relations-pages-to-widgets-backend-schema";
import { asc, desc } from "drizzle-orm";

export async function service(params?: { filter?: any }) {
  const result = await db.query[schemaName].findMany({
    with: populate,
    where: params?.filter,
  });

  return result;
}
