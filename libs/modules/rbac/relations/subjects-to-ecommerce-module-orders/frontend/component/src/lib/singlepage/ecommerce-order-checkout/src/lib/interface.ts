export { type IModel } from "@sps/rbac/relations/subjects-to-ecommerce-module-orders/sdk/model";
import { IModel } from "@sps/rbac/relations/subjects-to-ecommerce-module-orders/sdk/model";
import { ISpsComponentBase } from "@sps/ui-adapter";
import { IFindByIdActionProps } from "@sps/shared-frontend-api";

export const variant = "ecommerce-order-checkout" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  data: Partial<IModel>;
  apiProps?: {
    params?: IFindByIdActionProps["params"];
    options?: IFindByIdActionProps["options"];
  };
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModel;
}
