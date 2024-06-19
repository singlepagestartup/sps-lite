import { IModel } from "@sps/sps-host-models-page-contracts";
import { IModel as IModelExtended } from "@sps/sps-host-models-page-contracts-extended";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { ISpsComponentBase } from "@sps/ui-adapter";

export const variant = "find-by-id" as const;

export interface IComponentProps extends Omit<ISpsComponentBase, "children"> {
  variant: typeof variant;
  id: string;
  set?: Dispatch<SetStateAction<IModelExtended | undefined>>;
  children?: ({ data }: { data: IModelExtended }) => ReactNode;
}

export interface IComponentPropsExtended extends IComponentProps {}
