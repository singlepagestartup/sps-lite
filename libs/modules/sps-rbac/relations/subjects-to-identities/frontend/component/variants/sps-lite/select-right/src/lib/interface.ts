import { IRelation } from "@sps/sps-rbac-relations-subjects-to-identities-contracts";
import { IRelation as IRelationExtended } from "@sps/sps-rbac-relations-subjects-to-identities-contracts-extended";

export const variant = "select-right" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  subjectId?: string;
  data?: IRelation;
}

export interface IComponentPropsExtended extends IComponentProps {
  data?: IRelationExtended;
}
