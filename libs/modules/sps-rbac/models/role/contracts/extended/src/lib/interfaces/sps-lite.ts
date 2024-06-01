import { IRelation as IUsersToRoles } from "@sps/sps-rbac-relations-users-to-roles-contracts";
import type { IModel as IParentModel } from "@sps/sps-rbac-models-role-contracts";

export interface IModel extends IParentModel {
  usersToRoles: IUsersToRoles[];
}
