import { IModel } from "@sps/sps-website-builder/models/button/contracts/root";
import { IModel as IModelExtended } from "@sps/sps-website-builder/models/button/contracts/extended";
import { UseFormReturn } from "react-hook-form";
import { ISpsComponentBase } from "@sps/ui-adapter";
import { IFindByIdActionProps } from "@sps/shared-frontend-api";

export const variant = "admin-select-input" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  formFieldName: string;
  form: UseFormReturn<any>;
  renderField?: keyof IModel;
  className?: string;
  apiProps?: {
    params?: IFindByIdActionProps["params"];
    options?: IFindByIdActionProps["options"];
  };
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended[];
}
