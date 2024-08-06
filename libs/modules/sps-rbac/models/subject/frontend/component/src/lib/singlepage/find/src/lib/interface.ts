export { type IModel } from "@sps/sps-rbac/models/subject/sdk/model";
import { IModel } from "@sps/sps-rbac/models/subject/sdk/model";
import { Dispatch, SetStateAction } from "react";
import { ISpsComponentBase } from "@sps/ui-adapter";
import { IFindByIdActionProps } from "@sps/shared-frontend-api";

export const variant = "find" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  set?: Dispatch<SetStateAction<IModel[] | undefined>>;
  children?: ({ data }: { data: IModel[] | undefined }) => any;
  apiProps?: {
    params?: IFindByIdActionProps["params"];
    options?: IFindByIdActionProps["options"];
  };
}

export interface IComponentPropsExtended extends IComponentProps {}
