export { type IModel } from "@sps/sps-rbac/models/subject/sdk/model";
import { IModel } from "@sps/sps-rbac/models/subject/sdk/model";
import { ReactNode } from "react";
import { ISpsComponentBase } from "@sps/ui-adapter";

export const variant = "jwt-provider" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  children: ReactNode;
}

export interface IComponentPropsExtended extends IComponentProps {}
