import { IModel } from "@sps/sps-website-builder-models-buttons-array-contracts";
import { IModel as IModelExtended } from "@sps/sps-website-builder-models-buttons-array-contracts-extended";

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
