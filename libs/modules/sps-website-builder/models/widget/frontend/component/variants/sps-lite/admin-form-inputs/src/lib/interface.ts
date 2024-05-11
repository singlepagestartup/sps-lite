import { IModel } from "@sps/sps-website-builder-models-widget-contracts";
import { IModel as IModelExtended } from "@sps/sps-website-builder-models-widget-contracts-extended";
import { UseFormReturn } from "react-hook-form";

export const variant = "admin-form-inputs" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  form: UseFormReturn<any>;
}

export interface IComponentPropsExtended extends IComponentProps {}
