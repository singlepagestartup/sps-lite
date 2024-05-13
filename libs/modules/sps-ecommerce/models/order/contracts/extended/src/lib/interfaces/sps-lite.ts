import type { IModel as IParentModel } from "@sps/sps-ecommerce-models-order-contracts";
import type { IModel as ICart } from "@sps/sps-ecommerce-models-cart-contracts";
import type { IModel as IOrderProduct } from "@sps/sps-ecommerce-models-order-product-contracts";
import type { IModel as IUser } from "@sps/sps-rbac-models-user-contracts";
import type { IModel as IInvoice } from "@sps/sps-billing-models-invoice-contracts";

export interface IModel extends IParentModel {
  user?: IUser;
  cart?: ICart | null;
  invoice?: IInvoice | null;
  orderProducts?: IOrderProduct[] | null;
}
