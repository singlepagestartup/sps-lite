import { eq } from "drizzle-orm";
import { PgInsertValue, PgTableWithColumns } from "drizzle-orm/pg-core";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { IBaseServiceParams } from "../interfaces";

interface IServiceParams<
  Schema extends Record<string, unknown>,
  DBType extends PostgresJsDatabase<Schema>,
  TableType extends PgTableWithColumns<any>,
> extends IBaseServiceParams<Schema, DBType, TableType> {
  id: string;
  data: PgInsertValue<TableType>;
}

export async function service<
  Schema extends Record<string, unknown>,
  DBType extends PostgresJsDatabase<Schema>,
  TableType extends PgTableWithColumns<any>,
>(params: IServiceParams<Schema, DBType, TableType>) {
  const { db, Table, data, id } = params;

  const entities: TableType["$inferSelect"][] = await db
    .update(Table)
    .set(data)
    .where(eq(Table["id"], id))
    .returning();

  // const entities: TableType["$inferSelect"][] = await db
  //   .select()
  //   .from(Table)
  //   .where(eq(Table["id"], id));

  // const ptl = await db
  //   .select()
  //   .from(schema.PagesToLayoutsTable)
  //   .where(
  //     eq(
  //       schema.PagesToLayoutsTable.layoutId,
  //       "0aeab32e-d5ed-4309-9a5d-6bfbceda0d35",
  //     ),
  //   );
  // console.log(`🚀 ~ handler ~ ptl:`, ptl);

  // config.table
  // const sanitizedData = { ...data };

  // for (const relation of Object.keys(config)) {
  //   if (data[relation]) {
  //     if (Array.isArray(data[relation])) {
  //       for (const relItem of data[relation]) {
  //         const relData = relItem;
  //         // console.log(`🚀 ~ handler ~ relData:`, relData.id);
  //         const t = config[relation].table;
  //         // console.log(`🚀 ~ handler ~ t:`, t);
  //         const val = t["layoutId"];
  //         const filter = eq(val, relData.id);
  //         // console.log(`🚀 ~ handler ~ filter:`, filter);
  //         // console.log(`🚀 ~ handler ~ val:`, val);

  //         // console.log(`🚀 ~ handler ~ relData:`, relData.id);

  //         const relationItems = await db.select().from(t).where(filter);

  //         if (!relationItems.length) {
  //           const newRel = await db
  //             .insert(t)
  //             .values({
  //               pageId: id,
  //               layoutId: relData.id,
  //             })
  //             .returning();

  //           console.log(`🚀 ~ newRel ~ newRel:`, newRel);
  //         }

  //         console.log(`🚀 ~ handler ~ relationItems:`, relationItems);
  //       }
  //     }

  //     delete sanitizedData[relation];
  //   }
  // }

  // const relationsTableConfig = getTableConfig(Table);
  // console.log(`🚀 ~ relationsTableConfig:`, relationsTableConfig);

  // console.log(`🚀 ~ Relations:`, Relations);
  // console.log(`🚀 ~ config:`, config);
  // console.log(`🚀 ~ handler ~ data:`, sanitizedData);

  // const entities = await db
  //   .update(Table)
  //   .set(sanitizedData)
  //   .where(eq(Table["id"], id))
  //   .returning();

  return entities[0];
}
