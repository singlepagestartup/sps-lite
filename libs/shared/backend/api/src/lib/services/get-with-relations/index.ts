import { PgTableWithColumns } from "drizzle-orm/pg-core";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { IBaseServiceParams, IResultData } from "../interfaces";
import {
  GetSelectTableSelection,
  SelectResultField,
} from "drizzle-orm/query-builders/select.types";
import { eq } from "drizzle-orm";

interface IServiceParams<
  Schema extends Record<string, unknown>,
  DBType extends PostgresJsDatabase<Schema>,
  TableType extends PgTableWithColumns<any>,
  RelationsConfig extends { [key: string]: any },
> extends IBaseServiceParams<Schema, DBType, TableType, RelationsConfig> {
  entity: {
    [K in keyof {
      [Key in keyof GetSelectTableSelection<TableType> &
        string]: SelectResultField<
        GetSelectTableSelection<TableType>[Key],
        true
      >;
    }]: {
      [Key in keyof GetSelectTableSelection<TableType> &
        string]: SelectResultField<
        GetSelectTableSelection<TableType>[Key],
        true
      >;
    }[K];
  };
}

export async function service<
  Schema extends Record<string, unknown>,
  DBType extends PostgresJsDatabase<Schema>,
  TableType extends PgTableWithColumns<any>,
  RelationsConfig extends { [key: string]: any },
>(params: IServiceParams<Schema, DBType, TableType, RelationsConfig>) {
  const { entity, config, db } = params;

  // @ts-ignore
  const populatedEntity: IResultData<
    typeof entity,
    RelationsConfig,
    typeof config
  > = { ...entity };

  for (const relationKey of Object.keys(config)) {
    // @ts-ignore
    populatedEntity[relationKey] = [];

    if (!config[relationKey]?.table) {
      continue;
    }

    const RelationTable = config[relationKey].table;
    const RightTable = config[relationKey].rightTable;
    const leftKey = config[relationKey].leftKey as keyof typeof RelationTable;

    if (config[relationKey].leftKey) {
      const relationDataset = await db
        .select()
        .from(RelationTable)
        .where(eq(RelationTable[leftKey as any], entity["id"]))
        .leftJoin(
          RightTable,
          eq(
            RelationTable[config[relationKey].rightKey as any],
            RightTable["id"],
          ),
        );

      const extractedByKeyData: any = [];

      for (const relationData of relationDataset) {
        if (!relationData[relationKey]) {
          continue;
        }

        extractedByKeyData.push(relationData[relationKey]);
      }

      // @ts-ignore
      populatedEntity[relationKey] = toAddData;
    }
  }

  return populatedEntity;
}
