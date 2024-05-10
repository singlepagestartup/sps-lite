import { db } from "@sps/sps-db-provider";
import {
  populate,
  config,
  modelName,
} from "@sps/sps-website-builder-models-widget-backend-schema";
import { transformData } from "@sps/shared-backend-api";

export async function service(params?: { filter?: any }) {
  const result = await db.query[modelName].findMany({
    with: populate,
    where: params?.filter,
  });

  const transformedResult = result.map((entity) => {
    const transformedEntity = transformData<(typeof result)[0], typeof config>({
      entity,
      config,
    });

    return transformedEntity;
  });

  return transformedResult;
}
