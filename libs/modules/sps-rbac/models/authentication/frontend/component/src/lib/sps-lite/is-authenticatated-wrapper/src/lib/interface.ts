import { IModel } from "@sps/sps-rbac/models/authentication/sdk/model";
import { ReactNode } from "react";
import { ISpsComponentBase } from "@sps/ui-adapter";

export const variant = "is-authenticatated-wrapper" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  children: ReactNode;
}

export interface IComponentPropsExtended extends IComponentProps {}
