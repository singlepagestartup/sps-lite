import { IModel } from "@sps/sps-website-builder-models-page-contracts";
import { IModel as IModelExtended } from "@sps/sps-website-builder-models-page-contracts-extended";
import { Dispatch, SetStateAction } from "react";

export const variant = "get-by-url" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  set?: Dispatch<SetStateAction<IModelExtended | undefined>>;
  children?: any;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended;
}
