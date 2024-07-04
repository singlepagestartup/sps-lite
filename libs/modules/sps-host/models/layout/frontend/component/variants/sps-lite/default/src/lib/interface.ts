import { IModel } from "@sps/sps-host/models/layout/contracts/root";
import { IModel as IModelExtended } from "@sps/sps-host/models/layout/contracts/extended";
import { ISpsComponentBase } from "@sps/ui-adapter";
import { ReactNode } from "react";
import { IFindByIdActionProps } from "@sps/shared-frontend-api";

export const variant = "default" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  data: Partial<IModel>;
  children?: ReactNode;
  apiProps?: {
    params?: IFindByIdActionProps["params"];
    options?: IFindByIdActionProps["options"];
  };
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended;
}
