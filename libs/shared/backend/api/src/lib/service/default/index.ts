import "reflect-metadata";
import { inject, injectable } from "inversify";
import {
  FindAction,
  FindByIdAction,
  CreateAction,
  UpdateAction,
  DeleteAction,
} from "./actions";
import { DI } from "../../di/constants";
import { type IDefaultEntity } from "../../entity";

export interface IService<SCHEMA extends Record<string, unknown>> {
  find: () => Promise<SCHEMA[]>;
  findById: (props: { id: string }) => Promise<SCHEMA | null>;
  create: (props: { data: SCHEMA }) => Promise<SCHEMA | null>;
  delete: (props: { id: string }) => Promise<SCHEMA | null>;
  update: (props: { id: string; data: SCHEMA }) => Promise<SCHEMA | null>;
}

@injectable()
export class Service<SCHEMA extends Record<string, unknown>>
  implements IService<SCHEMA>
{
  constructor(@inject(DI.IEntity) private entity: IDefaultEntity<SCHEMA>) {}

  async find(): Promise<SCHEMA[]> {
    const action = new FindAction(this.entity);
    return action.execute();
  }

  async findById(props: { id: string }): Promise<SCHEMA | null> {
    const action = new FindByIdAction(this.entity);
    return action.execute(props);
  }

  async create(props: { data: SCHEMA }): Promise<SCHEMA | null> {
    const action = new CreateAction(this.entity);
    return action.execute(props);
  }

  async delete(props: { id: string }): Promise<SCHEMA> {
    const action = new DeleteAction(this.entity);
    return action.execute(props);
  }

  async update(props: { id: string; data: SCHEMA }): Promise<SCHEMA | null> {
    const action = new UpdateAction(this.entity);
    return action.execute(props);
  }
}
