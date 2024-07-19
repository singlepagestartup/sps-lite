import "reflect-metadata";
import { inject, injectable } from "inversify";
import {
  FindAction,
  FindByIdAction,
  CreateAction,
  UpdateAction,
  DeleteAction,
  dumpAction,
  seedAction,
} from "./actions";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { PgTableWithColumns } from "drizzle-orm/pg-core";
import { type IDefaultRepository } from "../../repository";
import { DI } from "../../di/constants";
import { Placeholder, SQL } from "drizzle-orm";
import { IModuleSeedConfig } from "./actions/seed/Seeder";
import { ZodObject } from "zod";
import { type IDefaultEntity } from "../../entity";

export interface IService<
  D extends PostgresJsDatabase<any>,
  T extends PgTableWithColumns<any>,
  E extends {
    [Key in keyof T["$inferInsert"]]:
      | SQL<unknown>
      | Placeholder<string, any>
      | T["$inferInsert"][Key];
  },
> {
  find: () => Promise<T["$inferSelect"][]>;
  findById: (props: { id: string }) => Promise<T["$inferSelect"] | null>;
  create: (props: { data: any }) => Promise<T["$inferSelect"] | null>;
  delete: (props: { id: string }) => Promise<T["$inferSelect"] | null>;
  update: (props: {
    id: string;
    data: any;
  }) => Promise<T["$inferSelect"] | null>;
  // dump: (props: {
  //   db: PostgresJsDatabase<any>;
  //   schemaName: keyof typeof props.db._.fullSchema;
  //   Table: PgTableWithColumns<any>;
  //   seedsPath?: string;
  // }) => Promise<any>;
  // seed: (props: {
  //   db: PostgresJsDatabase<any>;
  //   schemaName: keyof typeof props.db._.fullSchema;
  //   Table: PgTableWithColumns<any>;
  //   seedsPath?: string;
  //   insertSchema: ZodObject<any, any>;
  //   seedResults?: any;
  //   seedConfig: {
  //     [key: string]: IModuleSeedConfig<any>;
  //   };
  // }) => Promise<any>;
}

@injectable()
export class Service<
  D extends PostgresJsDatabase<any>,
  T extends PgTableWithColumns<any>,
  E extends {
    [Key in keyof T["$inferInsert"]]:
      | SQL<unknown>
      | Placeholder<string, any>
      | T["$inferInsert"][Key];
  },
> implements IService<D, T, E>
{
  constructor(@inject(DI.IEntity) private entity: IDefaultEntity<D, T, E>) {}

  async find(): Promise<T["$inferSelect"][]> {
    const action = new FindAction(this.entity);
    return action.execute();
  }

  async findById(props: { id: string }): Promise<T["$inferSelect"] | null> {
    const action = new FindByIdAction(this.entity);
    return action.execute(props);
  }

  async create(props: { data: E }): Promise<T["$inferSelect"] | null> {
    const action = new CreateAction(this.entity);
    return action.execute(props);
  }

  async delete(props: { id: string }): Promise<T["$inferSelect"]> {
    const action = new DeleteAction(this.entity);
    return action.execute(props);
  }

  async update(props: {
    id: string;
    data: E;
  }): Promise<T["$inferSelect"] | null> {
    const action = new UpdateAction(this.entity);
    return action.execute(props);
  }

  // dump(props: {
  //   db: PostgresJsDatabase<any>;
  //   schemaName: keyof typeof props.db._.fullSchema;
  //   Table: PgTableWithColumns<any>;
  //   seedsPath?: string;
  // }) {
  //   return dumpAction(props);
  // }

  // seed(props: {
  //   db: PostgresJsDatabase<any>;
  //   schemaName: keyof typeof props.db._.fullSchema;
  //   Table: PgTableWithColumns<any>;
  //   seedsPath?: string;
  //   insertSchema: any;
  //   seedResults?: any;
  //   seedConfig: {
  //     [key: string]: any;
  //   };
  // }) {
  //   return seedAction(props);
  // }
}
