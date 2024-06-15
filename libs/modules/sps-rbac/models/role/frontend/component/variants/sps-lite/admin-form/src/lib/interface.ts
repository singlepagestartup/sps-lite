import { IModel } from "@sps/sps-rbac-models-role-contracts";
import { IModel as IModelExtended } from "@sps/sps-rbac-models-role-contracts-extended";
import { ISpsComponentBase } from "@sps/ui-adapter";

export const variant = "admin-form" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  className?: string;
  data?: IModel;
  setOpen?: (open: boolean) => void;
}

export interface IComponentPropsExtended extends IComponentProps {
  data?: IModelExtended;
}
