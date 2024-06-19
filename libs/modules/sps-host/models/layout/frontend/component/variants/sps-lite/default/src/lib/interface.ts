import { IModel } from "@sps/sps-host-models-layout-contracts";
import { IModel as IModelExtended } from "@sps/sps-host-models-layout-contracts-extended";
import { ISpsComponentBase } from "@sps/ui-adapter";
import { ReactNode } from "react";

export const variant = "default" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  data: Partial<IModel>;
  children?: ReactNode;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended;
}
