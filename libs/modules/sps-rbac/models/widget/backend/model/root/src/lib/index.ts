import "reflect-metadata";
import {
  DI,
  type IDefaultService,
  type IDefaultModel,
} from "@sps/shared-backend-api";
import { inject, injectable } from "inversify";
import { db } from "@sps/sps-rbac/backend/db/root";
import { schemaName } from "@sps/sps-rbac/models/widget/backend/schema/root";

@injectable()
export class Model implements IDefaultModel {
  constructor(@inject(DI.IService) private service: IDefaultService) {
    this.service = service;
  }

  async find() {
    return this.service.find(db, schemaName);
  }

  // async findById(props: FindByIdServiceProps) {
  //   return this.service.findById(props);
  // }

  // async create(data: any) {
  //   return this.service.create(data);
  // }
}
