import { IModel } from "@sps/sps-website-builder/models/slide/contracts/root";
import { IModel as IModelExtended } from "@sps/sps-website-builder/models/slide/contracts/extended";
import { ISpsComponentBase } from "@sps/ui-adapter";

export const variant = "admin-table" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  className?: string;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended[];
}
