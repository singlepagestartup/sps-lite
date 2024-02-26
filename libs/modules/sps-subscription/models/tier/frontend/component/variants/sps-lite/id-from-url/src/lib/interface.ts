import { IModel } from "@sps/sps-subscription-models-tier-contracts";
import { IModel as IModelExtended } from "@sps/sps-subscription-models-tier-contracts-extended";

export const variant = "id-from-url" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended;
}
