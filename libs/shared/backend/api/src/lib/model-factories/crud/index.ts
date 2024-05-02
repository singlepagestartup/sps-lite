import { PgTableWithColumns } from "drizzle-orm/pg-core";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";

import * as handlers from "../../handlers";
import { IBaseHandlerParams } from "../../handlers/interfaces";

export interface IFactoryParams<
  Schema extends Record<string, unknown>,
  DBType extends PostgresJsDatabase<Schema>,
  TableType extends PgTableWithColumns<any>,
> extends IBaseHandlerParams<Schema, DBType, TableType> {}

export const factory = <
  Schema extends Record<string, unknown>,
  DBType extends PostgresJsDatabase<Schema>,
  TableType extends PgTableWithColumns<any>,
>(
  params: IFactoryParams<Schema, DBType, TableType>,
) => {
  const { db, Table } = params;

  return {
    async find() {
      const data = await handlers.find({
        db,
        Table,
      });

      return data;
    },

    async findById({ id }: { id: string }) {
      // const data = await handlers.findById({
      //   id,
      //   db,
      //   modelName,
      //   transformData,
      //   Table,
      //   Relations,
      //   config,
      //   populate,
      // });

      // return data;
      return {};
    },
    async create({
      data,
    }: {
      data: {
        [key: string]: any;
      };
    }) {
      // const entitiy = await handlers.create({
      //   db,
      //   Table,
      //   Relations,
      //   config,
      //   data,
      // });

      // return entitiy;
      return {};
    },
    async update({
      id,
      data,
    }: {
      id: string;
      data: {
        [key: string]: any;
      };
    }) {
      // const entitiy = await handlers.update({
      //   id,
      //   db,
      //   Table,
      //   Relations,
      //   config,
      //   data,
      // });

      // return entitiy;
      return {};
    },
  };
};
