import { IModel } from "@sps/sps-website-builder/models/hero-section-block/sdk/model";
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
  fileStorageWidgets?: ReactNode;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModel;
}
