import { IModel } from "@sps/sps-host-models-page-contracts";
import { IModel as IModelExtended } from "@sps/sps-host-models-page-contracts-extended";
import { ISpsComponentBase } from "@sps/ui-adapter";

export const variant = "admin-form" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  className?: string;
  data?: Partial<IModel>;
  setOpen?: (open: boolean) => void;
}

export interface IComponentPropsExtended extends IComponentProps {
  data?: IModelExtended;
}
