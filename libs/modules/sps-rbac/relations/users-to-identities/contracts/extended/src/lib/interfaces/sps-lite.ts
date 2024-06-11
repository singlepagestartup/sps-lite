import type { IRelation as IParentRelation } from "@sps/sps-rbac-relations-users-to-identities-contracts";
import { IModel as IUser } from "@sps/sps-rbac-models-user-contracts";

import { IModel as IIdentity } from "@sps/sps-rbac-models-identity-contracts";

export interface IRelation extends IParentRelation {
  user: IUser;

  identity: IIdentity;
}
