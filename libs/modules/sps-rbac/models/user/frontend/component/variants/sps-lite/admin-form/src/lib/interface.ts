import { IModel } from "@sps/sps-rbac-models-user-contracts";
import { IModel as IModelExtended } from "@sps/sps-rbac-models-user-contracts-extended";

export const variant = "admin-form" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  className?: string;
  data?: IModel;
  setOpen?: (open: boolean) => void;
}

export interface IComponentPropsExtended extends IComponentProps {
  data?: IModelExtended;
}
