import { PgTableWithColumns } from "drizzle-orm/pg-core";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";

export interface IService {
  find: (props: {
    db: PostgresJsDatabase<any>;
    schemaName: keyof typeof props.db._.fullSchema;
  }) => Promise<any>;
  findById: (props: {
    id: string;
    db: PostgresJsDatabase<any>;
    Table: PgTableWithColumns<any>;
    schemaName: keyof typeof props.db._.fullSchema;
  }) => Promise<any>;
  create: (props: {
    data: any;
    db: PostgresJsDatabase<any>;
    insertSchema: any;
    Table: PgTableWithColumns<any>;
    schemaName: keyof typeof props.db._.fullSchema;
  }) => Promise<any>;
  update: (props: {
    id: string;
    data: any;
    db: PostgresJsDatabase<any>;
    insertSchema: any;
    Table: PgTableWithColumns<any>;
    schemaName: keyof typeof props.db._.fullSchema;
  }) => Promise<any>;
  delete: (props: {
    id: string;
    db: PostgresJsDatabase<any>;
    Table: PgTableWithColumns<any>;
    schemaName: keyof typeof props.db._.fullSchema;
  }) => Promise<any>;
  dump: (props: {
    db: PostgresJsDatabase<any>;
    schemaName: keyof typeof props.db._.fullSchema;
    table: PgTableWithColumns<any>;
    seedsPath?: string;
  }) => Promise<any>;
}
