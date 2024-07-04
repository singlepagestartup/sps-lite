import { IModel } from "@sps/sps-third-parties/models/widget/contracts/root";
import { IModel as IModelExtended } from "@sps/sps-third-parties/models/widget/contracts/extended";
import { ISpsComponentBase } from "@sps/ui-adapter";
import { IFindActionsProps } from "@sps/shared-frontend-api";

export const variant = "admin-table" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  className?: string;
  apiProps?: {
    params?: IFindActionsProps["params"];
    options?: IFindActionsProps["options"];
  };
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended[];
}
