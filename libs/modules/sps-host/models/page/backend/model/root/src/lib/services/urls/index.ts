import { FindServiceProps, queryBuilder } from "@sps/shared-backend-api";
import { service as find } from "../find";
import { EntityWithUrls, service as withUrls } from "../with-urls";

export async function service(props?: FindServiceProps) {
  const entities = await find();
  const saturatedEntities: EntityWithUrls[] = [];

  for (const entity of entities) {
    const saturatedEntity = await withUrls({ id: entity.id });
    saturatedEntities.push(saturatedEntity);
  }

  return saturatedEntities
    .map((entity) => {
      return entity.urls;
    })
    .flat();
}
