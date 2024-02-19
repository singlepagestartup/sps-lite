import { IModel } from "@sps/sps-rbac-role-contracts";
import { IModel as IModelExtended } from "@sps/sps-rbac-role-contracts-extended";

export const variant = "default" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  data: IModel;
}

export interface IComponentPropsExtended extends IComponentBase {
  isServer: boolean;
  data: IModelExtended;
}
