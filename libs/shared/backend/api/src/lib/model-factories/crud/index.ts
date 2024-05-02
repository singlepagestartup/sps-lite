import { PgInsertValue, PgTableWithColumns } from "drizzle-orm/pg-core";
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
    async create(props: { data: PgInsertValue<TableType> }) {
      const result = await handlers.create({
        db,
        Table,
        data: props.data,
      });

      return result;
    },

    async update(props: { id: string; data: PgInsertValue<TableType> }) {
      const { id, data } = props;

      const result = await handlers.update({
        id,
        db,
        Table,
        data,
      });

      return result;
    },

    async find() {
      const result = await handlers.find({
        db,
        Table,
      });

      return result;
    },

    async findById({ id }: { id: string }) {
      const result = await handlers.findById({
        id,
        db,
        Table,
      });

      return result;
    },

    async delete({ id }: { id: string }) {
      const result = await handlers.deleteEntity({
        id,
        db,
        Table,
      });

      return result;
    },
  };
};
