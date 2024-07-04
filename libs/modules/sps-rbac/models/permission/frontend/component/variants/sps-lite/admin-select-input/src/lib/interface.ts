import { IModel } from "@sps/sps-rbac/models/permission/contracts/root";
import { IModel as IModelExtended } from "@sps/sps-rbac/models/permission/contracts/extended";
import { UseFormReturn } from "react-hook-form";
import { ISpsComponentBase } from "@sps/ui-adapter";
import { IFindActionsProps } from "@sps/shared-frontend-api";

export const variant = "admin-select-input" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  formFieldName: string;
  form: UseFormReturn<any>;
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
