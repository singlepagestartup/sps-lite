import "reflect-metadata";
export { type IModel } from "./interface";
import { inject, injectable } from "inversify";
import { type IModel } from "./interface";
import { IDefaultService } from "../../service";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { FindByIdServiceProps } from "../../services/interfaces";
import { PgTableWithColumns } from "drizzle-orm/pg-core";
import { ZodObject } from "zod";
import { DI } from "../../di";

@injectable()
export class Model implements IModel {
  db: PostgresJsDatabase<any>;
  schemaName: keyof typeof this.db._.fullSchema;
  Table: PgTableWithColumns<any>;
  insertSchema: ZodObject<any, any>;
  service: IDefaultService;

  constructor(props: {
    service: IDefaultService;
    db: PostgresJsDatabase<any>;
    schemaName: keyof typeof props.db._.fullSchema;
    Table: PgTableWithColumns<any>;
    insertSchema: ZodObject<any, any>;
  }) {
    this.service = props.service;
    this.db = props.db;
    this.schemaName = props.schemaName;
    this.Table = props.Table;
    this.insertSchema = props.insertSchema;
  }

  async find() {
    return this.service.find({ db: this.db, schemaName: this.schemaName });
  }

  async findById(props: FindByIdServiceProps) {
    return this.service.findById({
      ...props,
      Table: this.Table,
      schemaName: this.schemaName,
      db: this.db,
    });
  }

  async create(data: any) {
    return this.service.create({
      data,
      db: this.db,
      Table: this.Table,
      schemaName: this.schemaName,
      insertSchema: this.insertSchema,
    });
  }

  async update(props: { id: string; data: any }) {
    return this.service.update({
      ...props,
      db: this.db,
      Table: this.Table,
      schemaName: this.schemaName,
      insertSchema: this.insertSchema,
    });
  }

  async delete(props: { id: string }) {
    return this.service.delete({
      ...props,
      db: this.db,
      Table: this.Table,
      schemaName: this.schemaName,
    });
  }

  async dump() {
    return this.service.dump({
      db: this.db,
      schemaName: this.schemaName,
      Table: this.Table,
    });
  }

  async seed() {
    return this.service.seed({
      db: this.db,
      schemaName: this.schemaName,
      Table: this.Table,
      insertSchema: this.insertSchema,
      seedConfig: {},
    });
  }
}
