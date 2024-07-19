import {
  DefaultEntity,
  DI,
  type IDefaultRepository,
} from "@sps/shared-backend-api";
import { inject } from "inversify";

export class Entity<
  SCHEMA extends Record<string, unknown>,
> extends DefaultEntity<SCHEMA> {
  title?: string;
  className?: string;

  constructor(@inject(DI.IRepository) private r: IDefaultRepository<SCHEMA>) {
    super(r);
  }
}
