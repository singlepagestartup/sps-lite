import { IModel } from "@sps/sps-rbac/models/authentication-block/contracts/root";
import { IModel as IModelExtended } from "@sps/sps-rbac/models/authentication-block/contracts/extended";
import { ISpsComponentBase } from "@sps/ui-adapter";

export const variant = "admin-table-row" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  data: Partial<IModel>;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended;
}
