import { IModel } from "@sps/sps-website-builder-models-buttons-array-contracts";
import { IModel as IModelExtended } from "@sps/sps-website-builder-models-buttons-array-contracts-extended";
import { ISpsComponentBase } from "@sps/ui-adapter";

export const variant = "admin-table" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  className?: string;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended[];
}
