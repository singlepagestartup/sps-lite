export { type IModel } from "@sps/ecommerce/relations/orders-to-products/sdk/model";
import { IModel } from "@sps/ecommerce/relations/orders-to-products/sdk/model";
import { ISpsComponentBase } from "@sps/ui-adapter";

export const variant = "delete" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  data: Partial<IModel>;
  className?: string;
  successCallback?: (data: IModel) => void;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModel;
}
