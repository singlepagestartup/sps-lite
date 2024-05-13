import { db } from "@sps/sps-db-provider";
import {
  Table,
  populate,
  config,
  modelName,
} from "@sps/sps-website-builder-models-logotype-backend-schema";
import { eq } from "drizzle-orm";
import { transformData } from "@sps/shared-backend-api";

export async function service(props: { id: string }) {
  const { id } = props;

  const result = await db.query[modelName].findFirst({
    where: eq(Table.id, id),
    with: populate,
  });

  if (!result) {
    return null;
  }

  const transformedResult = transformData<typeof result, typeof config>({
    entity: result,
    config,
  });

  return transformedResult;
}
