import { PgTableWithColumns } from "drizzle-orm/pg-core";

type BaseConfig = {
  [key: string]: RelationConfig;
};

type RelationConfig = {
  name: string;
  type: "many";
  model: string;
  leftTable: {
    model: string;
    table: PgTableWithColumns<any>;
    key: string;
  };
  rightTables: {
    model: string;
    table: PgTableWithColumns<any>;
    key: string;
    extract: boolean;
    returnType: PgTableWithColumns<any>["$inferSelect"];
  }[];
};

export function transformData<
  SelectWithRelations extends PgTableWithColumns<any>["$inferSelect"],
  Config extends BaseConfig,
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

    const sanitizedValues = resultValues.map((resultValue) => {
      let sanitized = {};

      for (const resultKey of Object.keys(resultValue)) {
        for (const rightTable of relation.rightTables) {
          if (resultKey !== rightTable.key) {
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
