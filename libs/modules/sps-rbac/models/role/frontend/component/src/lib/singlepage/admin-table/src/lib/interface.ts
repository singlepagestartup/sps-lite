import { IModel } from "@sps/sps-rbac/models/role/sdk/model";
import { ISpsComponentBase } from "@sps/ui-adapter";
import { IFindActionProps } from "@sps/shared-frontend-api";
import { ReactNode } from "react";

export const variant = "admin-table" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  className?: string;
  apiProps?: {
    params?: IFindActionProps["params"];
    options?: IFindActionProps["options"];
  };
  adminForm?: (props: ISpsComponentBase & { data?: IModel }) => ReactNode;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModel[];
}
