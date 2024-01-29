import type { IEntity as IOrder } from "../../order/interfaces";

export interface IEntity {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  user?: unknown;
  orders?: IOrder[] | null;
}
