import { IModel } from "@sps/sps-subscription-models-attribute-contracts";
import { IModel as IModelExtended } from "@sps/sps-subscription-models-attribute-contracts-extended";

export const variant = "feature" as const;

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
