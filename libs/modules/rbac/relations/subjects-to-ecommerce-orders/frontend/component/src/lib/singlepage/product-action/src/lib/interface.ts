export { type IModel } from "@sps/rbac/relations/subjects-to-ecommerce-orders/sdk/model";
import { IModel } from "@sps/rbac/relations/subjects-to-ecommerce-orders/sdk/model";
import { ISpsComponentBase } from "@sps/ui-adapter";
import { IModel as ISubject } from "@sps/rbac/models/subject/sdk/model";
import { IModel as IProduct } from "@sps/ecommerce/models/product/sdk/model";
import { IFindActionProps } from "@sps/shared-frontend-api";

export const variant = "product-action" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  apiProps?: {
    params?: IFindActionProps["params"];
    options?: IFindActionProps["options"];
  };
  subject: ISubject;
  product: IProduct;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModel[];
}
