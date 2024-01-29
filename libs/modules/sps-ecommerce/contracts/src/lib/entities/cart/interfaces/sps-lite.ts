import type { IEntity as IUser } from "@sps/sps-rbac-contracts/lib/entities/user/interfaces";
import type { IEntity as IOrder } from "../../order/interfaces";

export interface IEntity {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  user?: IUser;
  orders?: IOrder[] | null;
}
