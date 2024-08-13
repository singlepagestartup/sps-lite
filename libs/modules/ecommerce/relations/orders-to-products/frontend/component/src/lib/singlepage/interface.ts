import { IComponentProps as IFindComponentProps } from "./find";
import { IComponentProps as IAdminTableRowComponentProps } from "./admin-table-row";
import { IComponentProps as IAdminTableComponentProps } from "./admin-table";
import { IComponentProps as IAdminSelectInputComponentProps } from "./admin-select-input";
import { IComponentProps as IAdminFormComponentProps } from "./admin-form";
import { IComponentProps as IDefaultComponentProps } from "./default";
import { IComponentProps as IAddToCartComponentProps } from "./add-to-cart";
import { IComponentProps as IEditInCartComponentProps } from "./edit-in-cart";
import { IComponentProps as ISubscriptionComponentProps } from "./subscription";

export type IComponentProps =
  | IFindComponentProps
  | IAdminTableRowComponentProps
  | IAdminTableComponentProps
  | IAdminSelectInputComponentProps
  | IAdminFormComponentProps
  | IDefaultComponentProps
  | IDefaultComponentProps
  | IAddToCartComponentProps
  | IEditInCartComponentProps
  | ISubscriptionComponentProps
  | never;
