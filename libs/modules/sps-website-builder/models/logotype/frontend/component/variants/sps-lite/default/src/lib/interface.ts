import { IModel } from "@sps/sps-website-builder/models/logotype/contracts/root";
import { IModel as IModelExtended } from "@sps/sps-website-builder/models/logotype/contracts/extended";
import { ISpsComponentBase } from "@sps/ui-adapter";

export const variant = "default" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  data: Partial<IModel>;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended;
}
