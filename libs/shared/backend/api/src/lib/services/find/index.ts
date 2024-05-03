import {
  PgSelectBuilder,
  PgTableWithColumns,
  PgSelect,
  CreatePgSelectFromBuilderMode,
  PgSelectQueryBuilderBase,
} from "drizzle-orm/pg-core";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { IBaseServiceParams } from "../interfaces";
import { SQL, eq } from "drizzle-orm";

type IRelationConfig<PRC extends { [key: string]: any }> = {
  [K in keyof PRC]: {
    name: string;
    type: "many";
    table: PgTableWithColumns<any>;
    rightTable: PgTableWithColumns<any>;
    leftKey: keyof PgTableWithColumns<any>;
    rightKey: keyof PgTableWithColumns<any>;
  };
};

interface IServiceParams<
  Schema extends Record<string, unknown>,
  DBType extends PostgresJsDatabase<Schema>,
  TableType extends PgTableWithColumns<any>,
  RC extends { [key: string]: any },
> extends IBaseServiceParams<Schema, DBType, TableType> {
  config: IRelationConfig<RC>;
  filter?: SQL<unknown>;
}

type IResultData<
  T extends { [key: string]: any },
  RC extends { [key: string]: any },
  IR extends IRelationConfig<RC>,
> = {
  [K in keyof T]: T[K];
} & {
  // [M in keyof IR]: PgSelectBuilder<IR[M]["table"]>;
  [M in keyof IR]: PgSelect<IR[M]["table"]["name"]>;
  // [M in keyof IR]: PgSelectQueryBuilderBase<IR[M]["table"]["name"]>;
  // [M in keyof IR]: CreatePgSelectFromBuilderMode<
  //   "db",
  //   IR[M]["table"]["name"],
  //   any,
  //   any
  // >;
  // [M in keyof IR]: string;
};

export async function service<
  Schema extends Record<string, unknown>,
  DBType extends PostgresJsDatabase<Schema>,
  TableType extends PgTableWithColumns<any>,
  RC extends { [key: string]: any },
>(params: IServiceParams<Schema, DBType, TableType, RC>) {
  const { db, Table, config, filter } = params;

  const data = await db.select().from(Table).where(filter);

  const filledData: IResultData<(typeof data)[0], RC, typeof config>[] = [];

  for (const entity of data) {
    if (!entity["id"]) {
      continue;
    }
    const toPassData: any = { ...entity };

    for (const relationKey of Object.keys(config)) {
      toPassData[relationKey] = [];

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

        const toAddData: any = [];

        for (const relationData of relationDataset) {
          if (!relationData[relationKey]) {
            continue;
          }

          toAddData.push(relationData[relationKey]);
        }

        // console.log(`🚀 ~ relationData:`, toAddData);

        toPassData[relationKey] = toAddData;

        // filledData.push({
        //   ...entity,
        //   [relationKey]: toAddData,
        // } as any);
        continue;
      }
    }

    filledData.push(toPassData as any);
  }
  // console.log(`🚀 ~ filledData:`, filledData[0]);

  return filledData;
  // const transformedData: typeof data = [];

  // for (const item of data) {
  //   transformedData.push(transformData({ data: item }) as any);
  // }

  // return transformedData;
}
