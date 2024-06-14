import { IModel } from "@sps/sps-rbac-models-permission-contracts";
import { IModel as IModelExtended } from "@sps/sps-rbac-models-permission-contracts-extended";

export const variant = "admin-table-row" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  data: Partial<IModel>;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended;
}
