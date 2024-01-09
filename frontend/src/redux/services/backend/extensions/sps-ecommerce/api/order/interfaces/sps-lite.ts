import { IEntity as IBackendUser } from "~redux/services/backend/extensions/users-permissions/api/user/interfaces";
import { IEntity as IBackendCart } from "~redux/services/backend/extensions/sps-ecommerce/api/cart/interfaces";
import { IEntity as IBackendOrderProduct } from "~redux/services/backend/extensions/sps-ecommerce/api/order-product/interfaces";

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
