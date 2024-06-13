import { IModel } from "@sps/sps-rbac-models-authentication-contracts";
import { IModel as IModelExtended } from "@sps/sps-rbac-models-authentication-contracts-extended";
import { ReactNode } from "react";

export const variant = "set-session-wrapper" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  children: ReactNode;
}

export interface IComponentPropsExtended extends IComponentProps {}
