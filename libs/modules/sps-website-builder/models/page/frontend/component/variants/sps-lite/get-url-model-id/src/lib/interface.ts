import { IModel } from "@sps/sps-website-builder-models-page-contracts";
import { IModel as IModelExtended } from "@sps/sps-website-builder-models-page-contracts-extended";
import { Dispatch, SetStateAction } from "react";

export const variant = "get-url-model-id" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  model: string;
  children?: (props: { data: number | undefined }) => any;
  set?: Dispatch<SetStateAction<number | undefined>>;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended;
}
