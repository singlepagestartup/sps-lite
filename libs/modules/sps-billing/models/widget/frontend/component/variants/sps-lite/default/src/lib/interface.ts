import { IModel } from "@sps/sps-billing/models/widget/contracts/root";
import { IModel as IModelExtended } from "@sps/sps-billing/models/widget/contracts/extended";
import { ISpsComponentBase } from "@sps/ui-adapter";

export const variant = "default" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  data: Partial<IModel>;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended;
}
