import { db } from "@sps/sps-db-provider";
import {
  Table,
  model,
} from "@sps/sps-website-builder-models-page-backend-schema-table";
import { populate } from "@sps/sps-website-builder-models-page-backend-schema";
import { eq } from "drizzle-orm";

export async function findById({ id }: { id: string }) {
  const result = await db.query[model].findFirst({
    with: populate,
    where: eq(Table.id, id),
  });

  return result;
}

export async function del({ id }: { id: string }) {
  // const result = await services.deleteEntity({
  //   id,
  //   db,
  //   Table,
  //   config,
  // });

  return {};
}
