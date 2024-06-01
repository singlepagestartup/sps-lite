import type { IRelation as IParentRelation } from "@sps/sps-rbac-relations-users-to-roles-contracts";
import { IModel as IUser } from "@sps/sps-rbac-models-user-contracts";

import { IModel as IRole } from "@sps/sps-rbac-models-role-contracts";

export interface IRelation extends IParentRelation {
  user: IUser;

  role: IRole;
}
