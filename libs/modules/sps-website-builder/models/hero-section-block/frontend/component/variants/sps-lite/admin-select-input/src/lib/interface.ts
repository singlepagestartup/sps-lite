import { IModel } from "@sps/sps-website-builder/models/hero-section-block/contracts/root";
import { IModel as IModelExtended } from "@sps/sps-website-builder/models/hero-section-block/contracts/extended";
import { UseFormReturn } from "react-hook-form";
import { ISpsComponentBase } from "@sps/ui-adapter";
import { IFindActionsProps } from "@sps/shared-frontend-api";

export const variant = "admin-select-input" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  form: UseFormReturn<any>;
  formFieldName: string;
  renderField?: keyof IModel;
  className?: string;
  apiProps?: {
    params?: IFindActionsProps["params"];
    options?: IFindActionsProps["options"];
  };
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended[];
}
