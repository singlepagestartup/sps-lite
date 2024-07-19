import { inject, injectable } from "inversify";
import { DI } from "../../../../di/constants";
import { type IRepository } from "../../../../repository";

@injectable()
export class Action {
  repository: IRepository;

  constructor(@inject(DI.IRepository) repository: IRepository) {
    this.repository = repository;
  }

  async execute() {
    const result = await this.repository.find();

    return result;
  }
}
