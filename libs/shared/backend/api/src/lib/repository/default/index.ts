import "reflect-metadata";
import { inject, injectable } from "inversify";
import { DI } from "../../di/constants";
import { type IDefaultStore } from "../../store";

export interface IRepository<SCHEMA extends Record<string, unknown>> {
  find: () => Promise<SCHEMA[]>;
  create: (data: SCHEMA) => Promise<SCHEMA>;
  findById: (props: { id: string }) => Promise<SCHEMA | null>;
  delete: (props: { id: string }) => Promise<SCHEMA>;
  updateById: (props: { id: string; data: SCHEMA }) => Promise<SCHEMA | null>;
}

@injectable()
export class Repository<SCHEMA extends Record<string, unknown>>
  implements IRepository<SCHEMA>
{
  constructor(@inject(DI.IStore) private store: IDefaultStore<SCHEMA>) {}

  async create(entity: SCHEMA): Promise<SCHEMA> {
    const result = await this.store.insert(entity);

    return result;
  }

  async find(): Promise<SCHEMA[]> {
    const result = await this.store.find();

    return result;
  }

  async findById(props: { id: string }): Promise<SCHEMA | null> {
    const result = await this.store.findByField("id", props.id);

    if (!result) {
      return null;
    }

    return result;
  }

  async delete(props: { id: string }) {
    const result = await this.store.deleteFirstByField("id", props.id);

    return result;
  }

  async updateById(props: {
    id: string;
    data: SCHEMA;
  }): Promise<SCHEMA | null> {
    const result = await this.store.updateFirstByField(
      "id",
      props.id,
      props.data,
    );

    return result;
  }
}
