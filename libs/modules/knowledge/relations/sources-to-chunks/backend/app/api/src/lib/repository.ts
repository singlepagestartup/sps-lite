import "reflect-metadata";
import { injectable } from "inversify";
import { DatabaseRepository } from "@sps/shared-backend-api";
import { Table } from "@sps/knowledge/relations/sources-to-chunks/backend/repository/database";
import { sql } from "drizzle-orm";

@injectable()
export class Repository extends DatabaseRepository<typeof Table> {
  async forChunkIds(ids: string[]) {
    if (!ids.length) return [];
    return this.db
      .select()
      .from(Table)
      .where(sql`${Table.chunkId} = ANY(${sql.param(ids)}::uuid[])`);
  }
}
