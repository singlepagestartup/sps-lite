import "reflect-metadata";
import { inject, injectable } from "inversify";
import { DI } from "../../../../di/constants";
import { type IRepository } from "../../../../repository";

@injectable()
export class Action<SCHEMA extends Record<string, unknown>> {
  repository: IRepository;

  constructor(@inject(DI.IRepository) repository: IRepository) {
    this.repository = repository;
  }

  async execute(props: { id: string }) {
    const result = await this.repository.findFirstByField("id", props.id);

    return result;
  }
}
