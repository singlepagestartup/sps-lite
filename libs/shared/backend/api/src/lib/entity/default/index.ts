import { type IDefaultRepository } from "../../repository";
import { inject, injectable } from "inversify";
import { DI } from "../../di/constants";

export interface IEntity<SCHEMA extends Record<string, unknown>> {
  find: () => Promise<SCHEMA[]>;
  create: (data: SCHEMA) => Promise<SCHEMA>;
  findById: (props: { id: string }) => Promise<SCHEMA | null>;
  delete: (props: { id: string }) => Promise<SCHEMA>;
  updateById: (props: { id: string; data: SCHEMA }) => Promise<SCHEMA | null>;
}

@injectable()
export class Entity<SCHEMA extends Record<string, unknown>>
  implements IEntity<SCHEMA>
{
  constructor(
    @inject(DI.IRepository)
    private repository: IDefaultRepository<SCHEMA>,
  ) {}

  async find() {
    const result = await this.repository.find();

    return result;
  }

  async create(data: SCHEMA) {
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

  async updateById(props: { id: string; data: SCHEMA }) {
    const result = await this.repository.updateById(props);

    return result;
  }
}
