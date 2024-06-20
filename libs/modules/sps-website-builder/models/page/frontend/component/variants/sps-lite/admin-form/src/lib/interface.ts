import { IModel } from "@sps/sps-website-builder/models/page/contracts/root";
import { IModel as IModelExtended } from "@sps/sps-website-builder/models/page/contracts/extended";
import { ISpsComponentBase } from "@sps/ui-adapter";

export const variant = "admin-form" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  data?: IModel;
  className?: string;
  setOpen?: (open: boolean) => void;
}

export interface IComponentPropsExtended extends IComponentProps {
  data?: IModelExtended;
}
