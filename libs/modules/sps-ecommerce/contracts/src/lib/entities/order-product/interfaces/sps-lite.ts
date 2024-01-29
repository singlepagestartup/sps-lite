import type { IEntity as IOrder } from "../../order/interfaces";
import type { IEntity as IProduct } from "../../product/interfaces";
import type { IEntity as IAttribute } from "../../attribute/interfaces";

export interface IEntity {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  order?: IOrder | null;
  product?: IProduct | null;
  attributes?: IAttribute[] | null;
}
