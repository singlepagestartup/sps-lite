import "reflect-metadata";
import { injectable } from "inversify";
import { DefaultRepository } from "@sps/shared-backend-api";

@injectable()
export class Repository<
  SCHEMA extends Record<string, unknown>,
> extends DefaultRepository<SCHEMA> {}
