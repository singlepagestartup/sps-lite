import { PgTableWithColumns } from "drizzle-orm/pg-core";

export type RelationConfig = {
  [key: string]: BaseConfig;
};

export type BaseConfig = {
  name: string;
  type: "many";
  model: string;
  leftTable: {
    model: string;
    table: PgTableWithColumns<any>;
    queryKey: string;
    schemaKey: string;
  };
  rightTables: {
    model: string;
    table: PgTableWithColumns<any>;
    queryKey: string;
    schemaKey: string;
    extract: boolean;
    returnType: PgTableWithColumns<any>["$inferSelect"];
  }[];
};

/**
 * @deprecated as not consistent for using in the project
 */
export function transformData<
  SelectWithRelations extends PgTableWithColumns<any>["$inferSelect"],
  Config extends RelationConfig,
>({ entity, config }: { entity: SelectWithRelations; config: Config }) {
  type ExtendType = {
    [K in keyof typeof config]: (typeof config)[K]["rightTables"][0]["returnType"][];
  };

  const transformedEntity: Partial<SelectWithRelations & ExtendType> = {
    ...(entity as any),
  };

  for (const relationName of Object.keys(config)) {
    const typedRealtionName = relationName as keyof typeof config;
    const relation = config[typedRealtionName];
    const key = relation.leftTable.model as keyof typeof entity;

    const resultValues = entity[key];

    if (!Array.isArray(resultValues)) {
      continue;
    }

    const sanitizedValues = resultValues.map((resultValue: any) => {
      let sanitized = {};

      for (const resultKey of Object.keys(resultValue)) {
        for (const rightTable of relation.rightTables) {
          if (resultKey !== rightTable.queryKey) {
            continue;
          }

          if (rightTable.extract) {
            const extractedValue = resultValue[resultKey];

            sanitized = extractedValue;
            continue;
          }
        }
      }

      return sanitized;
    });

    transformedEntity[typedRealtionName] = sanitizedValues as any;
  }

  return transformedEntity;
}
