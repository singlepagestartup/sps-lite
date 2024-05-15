import { db } from "@sps/sps-db-provider";
import {
  populate,
  config,
  modelName,
} from "@sps/sps-website-builder-models-features-section-block-backend-schema";
import { transformData } from "@sps/shared-backend-api";

export async function service(params?: { filter?: any }) {
  const result = await db.query[modelName].findMany({
    where: params?.filter,
  });

  // result[0];

  // const transformedResult = result.map((entity) => {
  //   const transformedEntity = transformData<(typeof result)[0], typeof config>({
  //     entity,
  //     config,
  //   });

  //   return transformedEntity;
  // });

  return result;
}
