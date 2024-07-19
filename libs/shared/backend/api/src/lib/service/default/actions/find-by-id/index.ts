import { injectable } from "inversify";
import { type IDefaultEntity } from "../../../../entity";

@injectable()
export class Action<SCHEMA extends Record<string, unknown>> {
  entity: IDefaultEntity<SCHEMA>;

  constructor(entity: IDefaultEntity<SCHEMA>) {
    this.entity = entity;
  }

  async execute(props: { id: string }) {
    const result = await this.entity.findById(props);

    return result;
  }
}
