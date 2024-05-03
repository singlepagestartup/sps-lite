import { PgSelectBuilder, PgTableWithColumns } from "drizzle-orm/pg-core";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { IBaseServiceParams } from "../interfaces";
import { SQL, eq } from "drizzle-orm";

type IRelationConfig<PRC extends { [key: string]: any }> = {
  [K in keyof PRC]: {
    name: string;
    type: "many";
    table: PgTableWithColumns<any>;
    leftKey: keyof PgTableWithColumns<any>;
    rightKey: string;
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
  [M in keyof IR]: PgSelectBuilder<IR[M]["table"]>;
  // [M in keyof IR]: string;
};

export async function service<
  Schema extends Record<string, unknown>,
  DBType extends PostgresJsDatabase<Schema>,
  TableType extends PgTableWithColumns<any>,
  RC extends { [key: string]: any },
>(params: IServiceParams<Schema, DBType, TableType, RC>) {
  const { db, Table, config, filter } = params;

  // console.log(`🚀 ~ config:`, config);

  const data = await db.select().from(Table).where(filter);

  const filledData: IResultData<(typeof data)[0], RC, typeof config>[] = [];
  // const filledData: [
  //   (typeof data)[0] & {
  //     relation: string;
  //   },
  // ] = [];

  for (const entity of data) {
    // console.log(`🚀 ~ entity:`, entity);
    if (!entity["id"]) {
      continue;
    }

    for (const relationKey of Object.keys(config)) {
      if (!config[relationKey]?.table) {
        continue;
      }

      const RelationTable = config[relationKey].table;
      const leftKey = config[relationKey].leftKey as keyof typeof RelationTable;

      if (config[relationKey].leftKey) {
        const relationData = await db
          .select()
          .from(config[relationKey]?.table)
          .where(eq(RelationTable[leftKey as any], entity["id"]));

        console.log(`🚀 ~ relationData:`, relationData);

        // filledData.push({
        //   ...entity,
        //   relation: "relationData",
        // });
        continue;
      }
    }
  }
  // console.log(`🚀 ~ filledData:`, filledData[0]);

  return filledData;
  // const transformedData: typeof data = [];

  // for (const item of data) {
  //   transformedData.push(transformData({ data: item }) as any);
  // }

  // return transformedData;
}
