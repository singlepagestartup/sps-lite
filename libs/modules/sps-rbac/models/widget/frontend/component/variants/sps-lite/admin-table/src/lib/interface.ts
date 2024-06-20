import { IModel } from "@sps/sps-rbac/models/widget/contracts/root";
import { IModel as IModelExtended } from "@sps/sps-rbac/models/widget/contracts/extended";
import { ISpsComponentBase } from "@sps/ui-adapter";

export const variant = "admin-table" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  className?: string;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended[];
}
