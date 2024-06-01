import { IRelation as IUsersToIdentities } from "@sps/sps-rbac-relations-users-to-identities-contracts";
import type { IModel as IParentModel } from "@sps/sps-rbac-models-identity-contracts";

export interface IModel extends IParentModel {
  usersToIdentities: IUsersToIdentities[];
}
