import {
  DefaultEntity,
  DI,
  type IDefaultRepository,
} from "@sps/shared-backend-api";
import { inject, injectable } from "inversify";

@injectable()
export class Entity<
  SCHEMA extends Record<string, unknown>,
> extends DefaultEntity<SCHEMA> {
  title: string;

  constructor(@inject(DI.IRepository) private r: IDefaultRepository<SCHEMA>) {
    super(r);
  }
}
