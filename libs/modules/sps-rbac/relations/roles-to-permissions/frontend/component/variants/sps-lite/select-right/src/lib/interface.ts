import { IRelation } from "@sps/sps-rbac-relations-roles-to-permissions-contracts";
import { IRelation as IRelationExtended } from "@sps/sps-rbac-relations-roles-to-permissions-contracts-extended";
import { ISpsComponentBase } from "@sps/ui-adapter";

export const variant = "select-right" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  roleId?: string;
  data?: IRelation;
}

export interface IComponentPropsExtended extends IComponentProps {
  data?: IRelationExtended;
}
