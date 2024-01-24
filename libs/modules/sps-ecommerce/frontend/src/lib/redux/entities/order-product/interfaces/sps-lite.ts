import type { IEntity as IBackendOrder } from "../../order/interfaces";
import type { IEntity as IBackendProduct } from "../../product/interfaces";
import type { IEntity as IBackendAttribute } from "../../attribute/interfaces";

export interface IEntity {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  order?: IBackendOrder | null;
  product?: IBackendProduct | null;
  attributes?: IBackendAttribute[] | null;
}
