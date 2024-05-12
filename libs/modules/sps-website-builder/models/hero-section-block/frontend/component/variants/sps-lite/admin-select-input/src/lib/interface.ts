import { IModel } from "@sps/sps-website-builder-models-hero-section-block-contracts";
import { IModel as IModelExtended } from "@sps/sps-website-builder-models-hero-section-block-contracts-extended";
import { UseFormReturn } from "react-hook-form";

export const variant = "admin-select-input" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  form: UseFormReturn<any>;
  formFieldName: string;
  renderField?: keyof IModel;
  className?: string;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended[];
}
