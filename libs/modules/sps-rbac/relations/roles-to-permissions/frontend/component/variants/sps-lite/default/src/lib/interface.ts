import { IRelation } from "@sps/sps-rbac/relations/roles-to-permissions/contracts/root";
import { IRelation as IRelationExtended } from "@sps/sps-rbac/relations/roles-to-permissions/contracts/extended";
import { ISpsComponentBase } from "@sps/ui-adapter";
import { IFindByIdActionProps } from "@sps/shared-frontend-api";

export const variant = "default" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  data: Partial<IRelation>;
  apiProps?: {
    params?: IFindByIdActionProps["params"];
    options?: IFindByIdActionProps["options"];
  };
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IRelationExtended;
}
