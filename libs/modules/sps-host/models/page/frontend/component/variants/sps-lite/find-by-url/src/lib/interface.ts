import { IModel } from "@sps/sps-host-models-page-contracts";
import { IModel as IModelExtended } from "@sps/sps-host-models-page-contracts-extended";
import { ISpsComponentBase } from "@sps/ui-adapter";
import { Dispatch, SetStateAction } from "react";

export const variant = "find-by-url" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  url: string;
  set?: Dispatch<SetStateAction<IModelExtended | undefined>>;
  children?: any;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended;
}
