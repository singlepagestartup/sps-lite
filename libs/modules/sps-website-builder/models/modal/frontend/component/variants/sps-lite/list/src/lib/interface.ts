import { IModel } from "@sps/sps-website-builder/models/modal/contracts/root";
import { IModel as IModelExtended } from "@sps/sps-website-builder/models/modal/contracts/extended";
import { ISpsComponentBase } from "@sps/ui-adapter";

export const variant = "list" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended[];
}
