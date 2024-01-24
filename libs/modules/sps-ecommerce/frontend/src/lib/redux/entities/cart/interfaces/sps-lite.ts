import type { IEntity as IBackendUser } from "@sps/sps-rbac-frontend/lib/redux/entities/user/interfaces";
import type { IEntity as IBackendOrder } from "@sps/sps-ecommerce-frontend/lib/redux/entities/order/interfaces";

export interface IEntity {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  user?: IBackendUser;
  orders?: IBackendOrder[] | null;
}
