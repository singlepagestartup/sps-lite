import { injectable } from "inversify";
import { type IDefaultEntity } from "../../../../entity";

@injectable()
export class Action<SCHEMA extends Record<string, unknown>> {
  entity: IDefaultEntity<SCHEMA>;

  constructor(entity: IDefaultEntity<SCHEMA>) {
    this.entity = entity;
  }

  async execute(props: { data: SCHEMA }) {
    const { data } = props;

    const result = await this.entity.create(data);

    return result;
  }
}
