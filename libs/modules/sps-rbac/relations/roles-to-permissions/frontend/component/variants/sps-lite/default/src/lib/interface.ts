import { IRelation } from "@sps/sps-rbac-relations-roles-to-permissions-contracts";
import { IRelation as IRelationExtended } from "@sps/sps-rbac-relations-roles-to-permissions-contracts-extended";

export const variant = "default" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  data: Partial<IRelation>;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IRelationExtended;
}
