import { IRelation } from "@sps/sps-rbac/relations/subjects-to-roles/contracts/root";
import { IRelation as IRelationExtended } from "@sps/sps-rbac/relations/subjects-to-roles/contracts/extended";
import { ISpsComponentBase } from "@sps/ui-adapter";

export const variant = "select-right" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  subjectId?: string;
  data?: IRelation;
}

export interface IComponentPropsExtended extends IComponentProps {
  data?: IRelationExtended;
}
