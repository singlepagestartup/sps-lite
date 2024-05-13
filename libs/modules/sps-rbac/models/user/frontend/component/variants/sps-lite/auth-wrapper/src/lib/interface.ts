import { IModel } from "@sps/sps-rbac-models-user-contracts";
import { IModel as IModelExtended } from "@sps/sps-rbac-models-user-contracts-extended";

export const variant = "auth-wrapper" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  children?: any;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended;
}
