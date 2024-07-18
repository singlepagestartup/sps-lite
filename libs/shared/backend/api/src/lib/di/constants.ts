import { PgTableWithColumns } from "drizzle-orm/pg-core";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { ContainerModule, interfaces } from "inversify";

export const DI = {
  IExceptionFilter: Symbol.for("IExceptionFilter"),
  IApp: Symbol.for("IApp"),
  IController: Symbol.for("IController"),
  IService: Symbol.for("IService"),
  IDataStore: Symbol.for("IDataStore"),
  IRepository: Symbol.for("IRepository"),
};
