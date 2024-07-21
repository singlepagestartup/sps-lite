import { IModel } from "@sps/sps-website-builder/models/features-section-block/sdk/model";
import { ISpsComponentBase } from "@sps/ui-adapter";
import { IFindByIdActionProps } from "@sps/shared-frontend-api";
import { ReactNode } from "react";

export const variant = "default" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  data: Partial<IModel>;
  apiProps?: {
    params?: IFindByIdActionProps["params"];
    options?: IFindByIdActionProps["options"];
  };
  features?: (props: IComponentProps) => ReactNode;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModel;
}
