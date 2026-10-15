import "reflect-metadata";
import { injectable } from "inversify";
import { DatabaseRepository } from "@sps/shared-backend-api";
import { Table } from "@sps/file-storage/models/file/backend/repository/database";
import { asc, inArray } from "drizzle-orm";

@injectable()
export class Repository extends DatabaseRepository<typeof Table> {
  async lock(ids: string[], mode: "key share" | "update" = "key share") {
    if (!ids.length) return [];
    return this.db
      .select()
      .from(Table)
      .where(inArray(Table.id, [...new Set(ids)]))
      .orderBy(asc(Table.id))
      .for(mode);
  }
}
