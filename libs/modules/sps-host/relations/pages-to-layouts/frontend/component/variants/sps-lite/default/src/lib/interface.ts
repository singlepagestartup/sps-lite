import { IRelation } from "@sps/sps-host/relations/pages-to-layouts/contracts/root";
import { IRelation as IRelationExtended } from "@sps/sps-host/relations/pages-to-layouts/contracts/extended";
import { ISpsComponentBase } from "@sps/ui-adapter";
import { ReactNode } from "react";
import { IFindByIdActionProps } from "@sps/shared-frontend-api";

export const variant = "default" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  data: Partial<IRelation>;
  children?: ReactNode;
  apiProps?: {
    params?: IFindByIdActionProps["params"];
    options?: IFindByIdActionProps["options"];
  };
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IRelationExtended;
}
