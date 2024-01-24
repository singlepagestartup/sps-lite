import { IEntity as IBackendUser } from "libs/modules/sps-rbac/frontend/src/lib/redux/entities/user/interfaces";
import { IEntity as IBackendOrder } from "~redux/services/backend/extensions/sps-ecommerce/api/order/interfaces";

export interface IEntity {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  user?: IBackendUser;
  orders?: IBackendOrder[] | null;
}
