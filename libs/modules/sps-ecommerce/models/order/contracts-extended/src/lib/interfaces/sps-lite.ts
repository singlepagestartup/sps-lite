import type { IModel as IParentModel } from "@sps/sps-ecommerce-order-contracts";
import type { IModel as ICart } from "@sps/sps-ecommerce-cart-contracts";
import type { IModel as IOrderProduct } from "@sps/sps-ecommerce-order-product-contracts";
import type { IModel as IUser } from "@sps/sps-rbac-contracts/lib/models/user/interfaces";
import type { IModel as IInvoice } from "@sps/sps-billing-invoice-contracts";

export interface IModel extends IParentModel {
  user?: IUser;
  cart?: ICart | null;
  invoice?: IInvoice | null;
  orderProducts?: IOrderProduct[] | null;
}
