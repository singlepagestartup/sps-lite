import { IRelation } from "@sps/sps-rbac/relations/subjects-to-sessions/contracts/root";
import { IRelation as IRelationExtended } from "@sps/sps-rbac/relations/subjects-to-sessions/contracts/extended";
import { ISpsComponentBase } from "@sps/ui-adapter";
import { IFindActionsProps } from "@sps/shared-frontend-api";

export const variant = "admin-table" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  className?: string;
  apiProps?: {
    params?: IFindActionsProps["params"];
    options?: IFindActionsProps["options"];
  };
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IRelationExtended[];
}
