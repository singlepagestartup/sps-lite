import { IRelation } from "@sps/sps-website-builder/relations/navbar-blocks-to-buttons-arrays/sdk/model";
import { UseFormReturn } from "react-hook-form";
import { ISpsComponentBase } from "@sps/ui-adapter";
import { IFindActionProps } from "@sps/shared-frontend-api";

export const variant = "admin-select-input" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  formFieldName: string;
  form: UseFormReturn<any>;
  renderField?: keyof IRelation;
  className?: string;
  apiProps?: {
    params?: IFindActionProps["params"];
    options?: IFindActionProps["options"];
  };
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IRelation[];
}
