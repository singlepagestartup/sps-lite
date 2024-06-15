import { IModel } from "@sps/sps-rbac-models-authentication-contracts";
import { IModel as IModelExtended } from "@sps/sps-rbac-models-authentication-contracts-extended";
import { ISpsComponentBase } from "@sps/ui-adapter";

export const variant = "logout-button" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
}

export interface IComponentPropsExtended extends IComponentProps {}
