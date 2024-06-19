import { IModel } from "@sps/sps-host-models-widget-contracts";
import { IModel as IModelExtended } from "@sps/sps-host-models-widget-contracts-extended";
import { Dispatch, SetStateAction } from "react";
import { ISpsComponentBase } from "@sps/ui-adapter";

export const variant = "find-by-id" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  id: string;
  set?: Dispatch<SetStateAction<IModelExtended | undefined>>;
  children?: ({ data }: { data: IModelExtended }) => any;
}

export interface IComponentPropsExtended extends IComponentProps {}
