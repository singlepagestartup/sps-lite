import { db } from "@sps/sps-db-provider";
import { model } from "@sps/sps-website-builder-models-page-backend-schema-table";
import { populate } from "@sps/sps-website-builder-models-page-backend-schema";

export async function service(params?: { filter?: any }) {
  const result = await db.query[model].findMany({
    with: populate,
    where: params?.filter,
  });

  return result;
}
