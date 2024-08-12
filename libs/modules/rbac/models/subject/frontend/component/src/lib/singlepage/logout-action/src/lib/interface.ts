export { type IModel } from "@sps/rbac/models/subject/sdk/model";
import { IModel } from "@sps/rbac/models/subject/sdk/model";
import { ISpsComponentBase } from "@sps/ui-adapter";

export const variant = "logout-action" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  redirectUrl?: string;
}

export interface IComponentPropsExtended extends IComponentProps {}
