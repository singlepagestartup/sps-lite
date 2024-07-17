import "reflect-metadata";
import {
  DI,
  type IDefaultService,
  type IDefaultModel,
  FindByIdServiceProps,
} from "@sps/shared-backend-api";
import { inject, injectable } from "inversify";
import { db } from "@sps/sps-rbac/backend/db/root";
import {
  schemaName,
  Table,
  insertSchema,
} from "@sps/sps-rbac/models/widget/backend/schema/root";

@injectable()
export class Model implements IDefaultModel {
  constructor(@inject(DI.IService) private service: IDefaultService) {
    this.service = service;
  }

  async find() {
    return this.service.find({ db, schemaName });
  }

  async findById(props: FindByIdServiceProps) {
    return this.service.findById({
      ...props,
      Table,
      schemaName,
      db,
    });
  }

  async create(data: any) {
    return this.service.create({ data, db, Table, schemaName, insertSchema });
  }

  async update(props: { id: string; data: any }) {
    return this.service.update({
      ...props,
      db,
      Table,
      schemaName,
      insertSchema,
    });
  }

  async delete(props: { id: string }) {
    return this.service.delete({ ...props, db, Table, schemaName });
  }

  async dump() {
    return this.service.dump({ db, schemaName, Table });
  }
}
