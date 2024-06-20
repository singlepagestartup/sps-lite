import { IModel } from "@sps/sps-website-builder/models/button/contracts/root";
import { IModel as IModelExtended } from "@sps/sps-website-builder/models/button/contracts/extended";
import { ISpsComponentBase } from "@sps/ui-adapter";

export const variant = "primary" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  data: Partial<IModel>;
  onClick?: () => void;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended;
}
