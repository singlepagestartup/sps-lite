import { IRelation } from "@sps/sps-website-builder/relations/footers-to-widgets/contracts/root";
import { IRelation as IRelationExtended } from "@sps/sps-website-builder/relations/footers-to-widgets/contracts/extended";
import { UseFormReturn } from "react-hook-form";
import { ISpsComponentBase } from "@sps/ui-adapter";
import { IFindActionsProps } from "@sps/shared-frontend-api";

export const variant = "admin-select-input" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  formFieldName: string;
  form: UseFormReturn<any>;
  renderField?: keyof IRelation;
  className?: string;
  apiProps?: {
    params?: IFindActionsProps["params"];
    options?: IFindActionsProps["options"];
  };
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IRelationExtended[];
}
