import type { IEntity as IUser } from "@sps/sps-rbac-contracts/lib/entities/user/interfaces";
import type { IEntity as ICart } from "../../cart/interfaces";
import type { IEntity as IOrderProduct } from "../../order-product/interfaces";

export interface IEntity {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  user?: IUser;
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
  cart?: ICart | null;
  orderProducts?: IOrderProduct[] | null;
}
