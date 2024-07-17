import "reflect-metadata";
export { type IService } from "./interface";
import { injectable } from "inversify";
import { type IService } from "./interface";
import {
  findAction,
  findByIdAction,
  createAction,
  updateAction,
  deleteAction,
  dumpAction,
} from "./actions";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { PgTableWithColumns } from "drizzle-orm/pg-core";

@injectable()
export class Service implements IService {
  find(props: {
    db: PostgresJsDatabase<any>;
    schemaName: keyof typeof props.db._.fullSchema;
  }) {
    return findAction(props);
  }

  findById(props: {
    id: string;
    db: PostgresJsDatabase<any>;
    Table: PgTableWithColumns<any>;
    schemaName: keyof typeof props.db._.fullSchema;
  }) {
    return findByIdAction(props);
  }

  create(props: {
    data: any;
    db: PostgresJsDatabase<any>;
    insertSchema: any;
    Table: PgTableWithColumns<any>;
    schemaName: keyof typeof props.db._.fullSchema;
  }) {
    return createAction(props);
  }

  update(props: {
    id: string;
    data: any;
    db: PostgresJsDatabase<any>;
    insertSchema: any;
    Table: PgTableWithColumns<any>;
    schemaName: keyof typeof props.db._.fullSchema;
  }) {
    return updateAction(props);
  }

  delete(props: {
    id: string;
    db: PostgresJsDatabase<any>;
    Table: PgTableWithColumns<any>;
    schemaName: keyof typeof props.db._.fullSchema;
  }) {
    return deleteAction(props);
  }

  dump(props: {
    db: PostgresJsDatabase<any>;
    schemaName: keyof typeof props.db._.fullSchema;
    table: PgTableWithColumns<any>;
    seedsPath?: string;
  }) {
    return dumpAction(props);
  }
}
