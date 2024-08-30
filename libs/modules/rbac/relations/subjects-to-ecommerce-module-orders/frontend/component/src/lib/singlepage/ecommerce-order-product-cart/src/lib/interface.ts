export { type IModel } from "@sps/rbac/relations/subjects-to-ecommerce-module-orders/sdk/model";
import { IModel } from "@sps/rbac/relations/subjects-to-ecommerce-module-orders/sdk/model";
import { ISpsComponentBase } from "@sps/ui-adapter";
import { IModel as ISubject } from "@sps/rbac/models/subject/sdk/model";
import { IModel as IProduct } from "@sps/ecommerce/models/product/sdk/model";
import { IFindActionProps } from "@sps/shared-frontend-api";

export const variant = "ecommerce-order-product-cart" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  apiProps?: {
    params?: IFindActionProps["params"];
    options?: IFindActionProps["options"];
  };
  subject: ISubject;
  product: IProduct;
  successCallback?: (data: IModel) => void;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModel[];
}
