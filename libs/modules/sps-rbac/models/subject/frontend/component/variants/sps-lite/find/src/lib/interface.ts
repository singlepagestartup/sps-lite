import { IModel } from "@sps/sps-rbac/models/subject/contracts/root";
import { IModel as IModelExtended } from "@sps/sps-rbac/models/subject/contracts/extended";
import { Dispatch, SetStateAction } from "react";
import { ISpsComponentBase } from "@sps/ui-adapter";
import { IFindByIdActionProps } from "@sps/shared-frontend-api";

export const variant = "find" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  set?: Dispatch<SetStateAction<IModelExtended[] | undefined>>;
  children?: ({ data }: { data: IModelExtended[] }) => any;
  apiProps?: {
    params?: IFindByIdActionProps["params"];
    options?: IFindByIdActionProps["options"];
  };
}

export interface IComponentPropsExtended extends IComponentProps {}
