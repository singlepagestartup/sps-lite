import { IRelation as ISubjectsToIdentities } from "@sps/sps-rbac-relations-subjects-to-identities-contracts";
import type { IModel as IParentModel } from "@sps/sps-rbac-models-identity-contracts";

export interface IModel extends IParentModel {
  subjectsToIdentities: ISubjectsToIdentities[];
}
