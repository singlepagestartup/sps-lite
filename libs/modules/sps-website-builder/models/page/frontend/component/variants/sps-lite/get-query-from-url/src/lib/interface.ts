import { IModel } from "@sps/sps-website-builder-models-page-contracts";
import { IModel as IModelExtended } from "@sps/sps-website-builder-models-page-contracts-extended";
import { Dispatch, SetStateAction } from "react";

export const variant = "get-query-from-url" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  set?: Dispatch<SetStateAction<any | undefined>>;
  children?: ({ data }: { data: any }) => any;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended;
}
