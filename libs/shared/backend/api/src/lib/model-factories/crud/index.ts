import { PgInsertValue, PgTableWithColumns } from "drizzle-orm/pg-core";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";

import * as services from "../../services";
import { IBaseServiceParams } from "../../services/interfaces";

export interface IFactoryParams<
  Schema extends Record<string, unknown>,
  DBType extends PostgresJsDatabase<Schema>,
  TableType extends PgTableWithColumns<any>,
> extends IBaseServiceParams<Schema, DBType, TableType> {
  config: any;
}

export const factory = <
  Schema extends Record<string, unknown>,
  DBType extends PostgresJsDatabase<Schema>,
  TableType extends PgTableWithColumns<any>,
>(
  params: IFactoryParams<Schema, DBType, TableType>,
) => {
  const { db, Table, config } = params;

  return {
    async create(props: { data: PgInsertValue<TableType> }) {
      const result = await services.create({
        db,
        Table,
        data: props.data,
      });

      return result;
    },

    async update(props: { id: string; data: PgInsertValue<TableType> }) {
      const { id, data } = props;

      const result = await services.update({
        id,
        db,
        Table,
        data,
      });

      return result;
    },

    async find(params?: { filter?: any }) {
      const result = await services.find({
        db,
        Table,
        config,
        filter: params?.filter,
      });

      return result;
    },

    async findById({ id }: { id: string }) {
      const result = await services.findById({
        id,
        db,
        Table,
      });

      return result;
    },

    async delete({ id }: { id: string }) {
      const result = await services.deleteEntity({
        id,
        db,
        Table,
      });

      return result;
    },
  };
};
