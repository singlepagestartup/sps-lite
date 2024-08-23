export { type IModel } from "@sps/ecommerce/relations/orders-to-products/sdk/model";
import { IModel } from "@sps/ecommerce/relations/orders-to-products/sdk/model";
import { ISpsComponentBase } from "@sps/ui-adapter";
import { IModel as IProduct } from "@sps/ecommerce/models/product/sdk/model";

export const variant = "create" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  product: IProduct;
  className?: string;
  successCallback?: (data: IModel) => void;
}

export interface IComponentPropsExtended extends IComponentProps {}
