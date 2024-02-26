import { IModel } from "@sps/sps-file-storage-models-file-contracts";
import { IModel as IModelExtended } from "@sps/sps-file-storage-models-file-contracts-extended";

export const variant = "image" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  data: IModel;
  containerClassName?: string;
  className?: string;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended;
}
