import "reflect-metadata";
import {
  DefaultController,
  DI,
  type IDefaultService,
} from "@sps/shared-backend-api";
import { inject, injectable } from "inversify";
import { type SCHEMA } from "@sps/sps-rbac/models/identity/backend/model/root";

@injectable()
export class Controller extends DefaultController<SCHEMA> {
  constructor(@inject(DI.IService) service: IDefaultService<SCHEMA>) {
    super(service);
    this.bindRoutes([]);
  }
}
