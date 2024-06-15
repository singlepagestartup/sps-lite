import { IModel } from "@sps/sps-website-builder-models-layout-contracts";
import { IModel as IModelExtended } from "@sps/sps-website-builder-models-layout-contracts-extended";
import { ReactNode } from "react";
import { ISpsComponentBase } from "@sps/ui-adapter";

export const variant = "default" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  data: Partial<IModel>;
  children: ReactNode;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended;
}
