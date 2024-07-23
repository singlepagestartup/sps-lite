import { inject, injectable } from "inversify";
import { type IRepository } from "../../../../repository";
import { DI } from "../../../../di/constants";

@injectable()
export class Action {
  repository: IRepository;

  constructor(@inject(DI.IRepository) repository: IRepository) {
    this.repository = repository;
  }

  async execute() {
    const result = await this.repository.dump();

    return result;
  }
}
