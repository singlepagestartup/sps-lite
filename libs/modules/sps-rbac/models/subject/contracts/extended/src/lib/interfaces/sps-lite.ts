import { IRelation as ISubjectsToSessions } from "@sps/sps-rbac-relations-subjects-to-sessions-contracts";
import { IRelation as ISubjectsToIdentities } from "@sps/sps-rbac-relations-subjects-to-identities-contracts";
import { IRelation as ISubjectsToRoles } from "@sps/sps-rbac-relations-subjects-to-roles-contracts";
import type { IModel as IParentModel } from "@sps/sps-rbac-models-subject-contracts";

export interface IModel extends IParentModel {
  subjectsToSessions: ISubjectsToSessions[];
  subjectsToIdentities: ISubjectsToIdentities[];
  subjectsToRoles: ISubjectsToRoles[];
}
