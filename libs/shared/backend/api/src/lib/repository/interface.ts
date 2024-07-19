import { FindServiceProps } from "../services/interfaces";

export interface IRepository {
  find: (props?: FindServiceProps) => Promise<any[]>;
  findByField: (field: string, value: any) => Promise<any>;
  findFirstByField: (field: string, value: any) => Promise<any>;
  insert: (data: any) => Promise<any>;
  deleteFirstByField: (field: string, value: any) => Promise<any>;
  updateFirstByField: (field: string, value: any, data: any) => Promise<any>;
}
