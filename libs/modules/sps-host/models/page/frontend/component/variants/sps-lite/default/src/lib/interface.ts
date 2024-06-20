import { IModel } from "@sps/sps-host-models-page-contracts";
import { IModel as IModelExtended } from "@sps/sps-host-models-page-contracts-extended";
import { ISpsComponentBase } from "@sps/ui-adapter";

export const variant = "default" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  data: Partial<IModel>;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended;
}
