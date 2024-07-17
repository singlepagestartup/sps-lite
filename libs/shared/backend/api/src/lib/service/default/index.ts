import "reflect-metadata";
export { type IService } from "./interface";
import { injectable } from "inversify";
import { type IService } from "./interface";
import { findAction } from "./actions";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";

@injectable()
export class Service implements IService {
  find(db: PostgresJsDatabase<any>, schemaName: keyof typeof db._.fullSchema) {
    return findAction(db, schemaName);
  }
}
