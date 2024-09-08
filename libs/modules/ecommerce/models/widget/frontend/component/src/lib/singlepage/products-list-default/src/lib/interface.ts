export { type IModel } from "@sps/ecommerce/models/widget/sdk/model";
import { IModel } from "@sps/ecommerce/models/widget/sdk/model";
import {
  IComponentProps as IParentComponentProps,
  IComponentPropsExtended as IParentComponentPropsExtended,
} from "@sps/shared-frontend-components/singlepage/default/interface";
import { ISpsComponentBase } from "@sps/ui-adapter";
import { ReactNode } from "react";
import { IModel as IProduct } from "@sps/ecommerce/models/product/sdk/model";

export const variant = "products-list-default" as const;

export interface IComponentProps
  extends IParentComponentProps<IModel, typeof variant> {
  children?: ReactNode;
  id: IProduct["id"];
}

export interface IComponentPropsExtended
  extends IParentComponentPropsExtended<
    IModel,
    typeof variant,
    IComponentProps
  > {}
