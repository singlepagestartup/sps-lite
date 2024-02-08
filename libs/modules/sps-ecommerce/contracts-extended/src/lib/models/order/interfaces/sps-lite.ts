import type { IModel as IParentModel } from "@sps/sps-ecommerce-contracts/lib/models/order/interfaces";
import type { IModel as ICart } from "@sps/sps-ecommerce-contracts/lib/models/cart/interfaces";
import type { IModel as IOrderProduct } from "@sps/sps-ecommerce-contracts/lib/models/order-product/interfaces";
import type { IModel as IUser } from "@sps/sps-rbac-contracts/lib/models/user/interfaces";
import type { IModel as IInvoice } from "@sps/sps-billing-contracts/lib/models/invoice/interfaces";

export interface IModel extends IParentModel {
  user?: IUser;
  cart?: ICart | null;
  invoice?: IInvoice | null;
  orderProducts?: IOrderProduct[] | null;
}
