// nx won't fix issue with circular types import
// https://github.com/nrwl/nx/issues/9083
// import type { IEntity as IUser } from "@sps/sps-rbac-contracts/lib/entities/user/interfaces";
import type { IEntity as IOrder } from "../../order/interfaces";

export interface IEntity {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  // user?: IUser;
  user?: unknown;
  orders?: IOrder[] | null;
}
