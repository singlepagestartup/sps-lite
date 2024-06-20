import { IRelation as ISubjectsToIdentities } from "@sps/sps-rbac/relations/subjects-to-identities/contracts/root";
import type { IModel as IParentModel } from "@sps/sps-rbac/models/identity/contracts/root";

export interface IModel extends IParentModel {
  subjectsToIdentities: ISubjectsToIdentities[];
}
