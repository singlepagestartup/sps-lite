export { type IModel } from "@sps/sps-third-parties/models/telegram/sdk/model";
import { IModel } from "@sps/sps-third-parties/models/telegram/sdk/model";
import { ISpsComponentBase } from "@sps/ui-adapter";
import { IFindByIdActionProps } from "@sps/shared-frontend-api";
import { ReactNode } from "react";

export const variant = "admin-table-row" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  data: Partial<IModel>;
  apiProps?: {
    params?: IFindByIdActionProps["params"];
    options?: IFindByIdActionProps["options"];
  };
  adminForm?: (props: ISpsComponentBase & { data?: IModel }) => ReactNode;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModel;
}
