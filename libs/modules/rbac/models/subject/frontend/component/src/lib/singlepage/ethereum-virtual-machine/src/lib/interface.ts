export { type IModel } from "@sps/rbac/models/subject/sdk/model";
import { IModel } from "@sps/rbac/models/subject/sdk/model";
import { ISpsComponentBase } from "@sps/ui-adapter";

export const variant = "ethereum-virtual-machine" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
}

export interface IComponentPropsExtended extends IComponentProps {}
