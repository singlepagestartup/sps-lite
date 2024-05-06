import { db } from "@sps/sps-db-provider";
import { model } from "@sps/sps-website-builder-models-page-backend-schema-table";
import {
  Table,
  populate,
  config,
} from "@sps/sps-website-builder-models-page-backend-schema";
import { eq } from "drizzle-orm";

export async function service(props: { id: string }) {
  const { id } = props;

  const result = await db.query[model].findFirst({
    where: eq(Table.id, id),
    with: populate,
  });

  if (!result) {
    return null;
  }

  const transformedResult = transformData<typeof result>({ entity: result });

  console.log(`🚀 ~ service ~ result:`, transformedResult);

  return transformedResult;
}

function transformData<SelectWithRelations extends typeof Table.$inferSelect>({
  entity,
}: {
  entity: SelectWithRelations;
}) {
  type ExtendType = {
    [K in keyof typeof config]: (typeof config)[K]["rightTables"][0]["returnType"][];
  };

  for (const relationName of Object.keys(config)) {
    const typedRealtionName = relationName as keyof typeof config;
    const relation = config[typedRealtionName];
    const resultKey = relation.leftTable.model as keyof typeof entity;

    const resultValues = entity[resultKey];
    if (!Array.isArray(resultValues)) {
      continue;
    }

    const sanitizedValues = resultValues.map((resultValue) => {
      const sanitized = {};

      for (const resultKey of Object.keys(resultValue)) {
        sanitized[resultKey] = resultValue[resultKey];
      }

      return sanitized;
    });

    entity[typedRealtionName] = sanitizedValues;
  }

  return entity as SelectWithRelations & ExtendType;
}
