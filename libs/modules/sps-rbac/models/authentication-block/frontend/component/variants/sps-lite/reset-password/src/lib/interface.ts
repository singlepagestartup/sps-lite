import { IModel } from "@sps/sps-rbac-models-authentication-block-contracts";
import { IModel as IModelExtended } from "@sps/sps-rbac-models-authentication-block-contracts-extended";

export const variant = "reset-password" as const;

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
