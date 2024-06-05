import { IRelation } from "@sps/sps-rbac-relations-users-to-roles-contracts";
import { IRelation as IRelationExtended } from "@sps/sps-rbac-relations-users-to-roles-contracts-extended";

export const variant = "select-right" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  userId?: string;
  data?: IRelation;
}

export interface IComponentPropsExtended extends IComponentProps {
  data?: IRelationExtended;
}
