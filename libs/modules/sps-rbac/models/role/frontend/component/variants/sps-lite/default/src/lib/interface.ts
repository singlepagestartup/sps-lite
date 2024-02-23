import { IModel } from "@sps/sps-rbac-models-role-contracts";
import { IModel as IModelExtended } from "@sps/sps-rbac-models-role-contracts-extended";

export const variant = "default" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  data: IModel;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended;
}
