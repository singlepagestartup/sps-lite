import { IModel } from "@sps/sps-rbac-models-authentication-contracts";
import { IModel as IModelExtended } from "@sps/sps-rbac-models-authentication-contracts-extended";

export const variant = "logout-action" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended;
}
