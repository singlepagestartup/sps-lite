import { inject, injectable } from "inversify";
import { type IRepository } from "../../../../repository";
import { DI } from "../../../../di/constants";
import { ISeedResult } from "../../../../configuration";

@injectable()
export class Action {
  repository: IRepository;

  constructor(@inject(DI.IRepository) repository: IRepository) {
    this.repository = repository;
  }

  async execute(props?: { seeds: ISeedResult[] }) {
    const result = await this.repository.seed(props);

    return result;
  }
}
