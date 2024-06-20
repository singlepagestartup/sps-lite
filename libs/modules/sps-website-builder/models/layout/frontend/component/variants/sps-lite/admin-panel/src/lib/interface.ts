import { IModel } from "@sps/sps-website-builder/models/layout/contracts/root";
import { IModel as IModelExtended } from "@sps/sps-website-builder/models/layout/contracts/extended";
import { ISpsComponentBase } from "@sps/ui-adapter";

export const variant = "admin-panel" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  data: Partial<IModel>;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended;
}
