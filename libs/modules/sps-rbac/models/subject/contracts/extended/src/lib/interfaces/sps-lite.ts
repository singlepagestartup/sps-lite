import { IRelation as ISubjectsToSessions } from "@sps/sps-rbac/relations/subjects-to-sessions/contracts/root";
import { IRelation as ISubjectsToIdentities } from "@sps/sps-rbac/relations/subjects-to-identities/contracts/root";
import { IRelation as ISubjectsToRoles } from "@sps/sps-rbac/relations/subjects-to-roles/contracts/root";
import type { IModel as IParentModel } from "@sps/sps-rbac/models/subject/contracts/root";

export interface IModel extends IParentModel {
  subjectsToSessions: ISubjectsToSessions[];
  subjectsToIdentities: ISubjectsToIdentities[];
  subjectsToRoles: ISubjectsToRoles[];
}
