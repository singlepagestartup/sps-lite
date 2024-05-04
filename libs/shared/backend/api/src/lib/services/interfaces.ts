import {
  BuildQueryResult,
  ExtractTablesWithRelations,
  TableRelationalConfig,
} from "drizzle-orm";
import { PgSelect, PgTableWithColumns } from "drizzle-orm/pg-core";
import { PgRelationalQuery } from "drizzle-orm/pg-core/query-builders/query";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";

export interface IBaseServiceParams<
  Schema extends Record<string, unknown>,
  DBType extends PostgresJsDatabase<Schema>,
  TableType extends PgTableWithColumns<any>,
  RelationsConfig extends { [key: string]: any },
> {
  db: DBType;
  Table: TableType;
  config: IRelationConfig<RelationsConfig>;
}

export type IRelationConfig<PRC extends { [key: string]: any }> = {
  [K in keyof PRC]: {
    name: string;
    type: "many";
    // table: PgTableWithColumns<any>;
    table: TableRelationalConfig;
    rightTable: PgTableWithColumns<any>;
    leftKey: keyof PgTableWithColumns<any>;
    rightKey: keyof PgTableWithColumns<any>;
  };
};

export type IResultData<
  T extends { [key: string]: any },
  RC extends { [key: string]: any },
  IR extends IRelationConfig<RC>,
> = {
  [K in keyof T]: T[K];
} & {
  [M in keyof IR]: any;
  // [M in keyof IR]: PgRelationalQuery<IR[M]["table"]["name"]>;
  // [M in keyof IR]: BuildQueryResult<
  //   any,
  //   ExtractTablesWithRelations<IR[M]["table"]>,
  //   ExtractTablesWithRelations<IR[M]["rightTable"]>
  // >;
};
