import type { IEntity as IBackendUser } from "@sps/sps-rbac-frontend/lib/redux/entities/user/interfaces";
import type { IEntity as IBackendCart } from "../../cart/interfaces";
import type { IEntity as IBackendOrderProduct } from "../../order-product/interfaces";

export interface IEntity {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  user?: IBackendUser;
  status:
    | "cart"
    | "payment"
    | "new"
    | "paid"
    | "canceled"
    | "confirmed"
    | "shipping"
    | "delivered";
  name: string | null;
  email: string | null;
  phone: string | null;
  comment: string | null;
  cart?: IBackendCart | null;
  orderProducts?: IBackendOrderProduct[] | null;
}
