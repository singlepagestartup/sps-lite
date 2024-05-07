import { db } from "@sps/sps-db-provider";
import { model } from "@sps/sps-website-builder-models-page-backend-schema-table";
import {
  populate,
  config,
} from "@sps/sps-website-builder-models-page-backend-schema";
import { transformData } from "@sps/shared-backend-api";

export async function service(params?: { filter?: any }) {
  const result = await db.query[model].findMany({
    with: populate,
    where: params?.filter,
  });

  const preparedResult = result.map((entity) => {
    const transformedResult = transformData<(typeof result)[0], typeof config>({
      entity,
      config,
    });

    return transformedResult;
  });

  return preparedResult;
}
