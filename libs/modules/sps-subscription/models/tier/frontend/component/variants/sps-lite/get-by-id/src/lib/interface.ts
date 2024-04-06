import { IModel } from "@sps/sps-subscription-models-tier-contracts";
import { IModel as IModelExtended } from "@sps/sps-subscription-models-tier-contracts-extended";
import { Dispatch, SetStateAction } from "react";

export const variant = "get-by-id" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  id: number;
  set?: Dispatch<SetStateAction<IModelExtended | undefined>>;
  children?: ({ data }: { data: IModelExtended }) => any;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended;
}
