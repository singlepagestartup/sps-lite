import { IModel } from "@sps/sps-website-builder/models/buttons-array/sdk/model";
import { ISpsComponentBase } from "@sps/ui-adapter";
import { IFindByIdActionProps } from "@sps/shared-frontend-api";
import { ReactNode } from "react";

export const variant = "default" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: IModel["variant"];
  data: Partial<IModel>;
  apiProps?: {
    params?: IFindByIdActionProps["params"];
    options?: IFindByIdActionProps["options"];
  };
  buttons?: ReactNode;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModel;
}
