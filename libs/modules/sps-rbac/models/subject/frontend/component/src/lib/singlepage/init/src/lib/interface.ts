export { type IModel } from "@sps/sps-rbac/models/subject/sdk/model";
import { ISpsComponentBase } from "@sps/ui-adapter";
import { ReactNode } from "react";

export const variant = "init" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  children?: ReactNode;
}

export interface IComponentPropsExtended extends IComponentProps {}
