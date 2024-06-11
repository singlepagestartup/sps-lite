import { IModel } from "@sps/sps-rbac-models-widget-contracts";
import { IModel as IModelExtended } from "@sps/sps-rbac-models-widget-contracts-extended";
import { UseFormReturn } from "react-hook-form";

export const variant = "admin-select-input" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  formFieldName: string;
  form: UseFormReturn<any>;
  renderField?: keyof IModel;
  className?: string;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended[];
}
