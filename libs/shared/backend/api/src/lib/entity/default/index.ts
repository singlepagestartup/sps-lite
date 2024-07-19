import { Placeholder, SQL } from "drizzle-orm";
import { PgTableWithColumns } from "drizzle-orm/pg-core";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { IDefaultRepository } from "../../repository";
import { inject, injectable } from "inversify";
import { DI } from "../../di/constants";

export interface IEntity<
  D extends PostgresJsDatabase<any>,
  T extends PgTableWithColumns<any>,
  DTO extends T["$inferInsert"],
> {
  find: () => Promise<T["$inferSelect"][]>;
  create: (data: DTO) => Promise<T["$inferSelect"]>;
  findById: (props: { id: string }) => Promise<T["$inferSelect"] | null>;
  delete: (props: { id: string }) => Promise<T["$inferSelect"]>;
  updateById: (props: {
    id: string;
    data: any;
  }) => Promise<T["$inferSelect"] | null>;
}

@injectable()
export class Entity<
  D extends PostgresJsDatabase<any>,
  T extends PgTableWithColumns<any>,
  DTO extends T["$inferInsert"],
> implements IEntity<D, T, DTO>
{
  constructor(
    @inject(DI.IRepository)
    private repository: IDefaultRepository<D, T>,
  ) {}

  async find() {
    const result = await this.repository.find();

    return result;
  }

  async create(data: DTO) {
    const result = await this.repository.create(data);

    return result;
  }

  async findById(props: { id: string }) {
    const result = await this.repository.findById(props);

    return result;
  }

  async delete(props: { id: string }) {
    const result = await this.repository.delete(props);

    return result;
  }

  async updateById(props: { id: string; data: DTO }) {
    const result = await this.repository.updateById(props);

    return result;
  }
}
