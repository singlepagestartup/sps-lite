import { IModel } from "@sps/sps-third-parties/models/telegram/contracts/root";
import { IModel as IModelExtended } from "@sps/sps-third-parties/models/telegram/contracts/extended";
import { UseFormReturn } from "react-hook-form";
import { ISpsComponentBase } from "@sps/ui-adapter";

export const variant = "admin-form-inputs" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  form: UseFormReturn<any>;
  data?: IModel;
  className?: string;
}

export interface IComponentPropsExtended extends IComponentProps {
  data?: IModelExtended;
}
