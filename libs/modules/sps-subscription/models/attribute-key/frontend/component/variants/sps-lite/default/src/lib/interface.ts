import { IModel } from "@sps/sps-subscription-models-attribute-key-contracts";
import { IModel as IModelExtended } from "@sps/sps-subscription-models-attribute-key-contracts-extended";

export const variant = "default" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  data: IModel;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended;
}
