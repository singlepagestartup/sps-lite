import { IModel } from "@sps/sps-billing-invoice-contracts";
import { IModel as IModelExtended } from "@sps/sps-billing-invoice-contracts-extended";

export const variant = "redirect" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  data: IModel;
}

export interface IComponentPropsExtended extends IComponentBase {
  isServer: boolean;
  data: IModelExtended;
}
