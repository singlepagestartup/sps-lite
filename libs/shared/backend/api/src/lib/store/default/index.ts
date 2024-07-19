import { inject, injectable } from "inversify";
import { DI } from "../../di/constants";
import { type IDefaultDatabase } from "../../database";

export interface IStore<SCHEMA extends Record<any, any>> {
  client: IDefaultDatabase<SCHEMA, any, any>;
  find: () => Promise<SCHEMA[]>;
  findByField: (field: string, value: keyof SCHEMA) => Promise<SCHEMA>;
  insert: (data: SCHEMA) => Promise<SCHEMA>;
  deleteFirstByField: (field: string, value: keyof SCHEMA) => Promise<SCHEMA>;
  updateFirstByField: (...props: any) => Promise<SCHEMA>;
}

@injectable()
export class Store<SCHEMA extends Record<any, any>> implements IStore<SCHEMA> {
  client: IDefaultDatabase<SCHEMA, any, any>;

  constructor(@inject(DI.IDatabase) db: IDefaultDatabase<SCHEMA, any, any>) {
    this.client = db;
  }

  async find(): Promise<SCHEMA[]> {
    const record = await this.client.find();

    return record;
  }

  async findByField(field: string, value: any): Promise<any> {
    const record = await this.client.findFirstByField(field, value);

    return record;
  }

  async insert(data: any): Promise<any> {
    const record = await this.client.insert(data);

    return record;
  }

  async deleteFirstByField(field: string, value: any): Promise<any> {
    const result = await this.client.deleteFirstByField(field, value);

    return result;
  }

  async updateFirstByField(field: string, value: any, data: any): Promise<any> {
    const result = await this.client.updateFirstByField(field, value, data);

    return result;
  }
}
