import { IModel } from "@sps/sps-website-builder-models-modal-contracts";
import { IModel as IModelExtended } from "@sps/sps-website-builder-models-modal-contracts-extended";

export const variant = "list" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended[];
}
