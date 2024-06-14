import { IRelation as IRolesToPermissions } from "@sps/sps-rbac-relations-roles-to-permissions-contracts";
import { IRelation as ISubjectsToRoles } from "@sps/sps-rbac-relations-subjects-to-roles-contracts";
import type { IModel as IParentModel } from "@sps/sps-rbac-models-role-contracts";

export interface IModel extends IParentModel {
  rolesToPermissions: IRolesToPermissions[];
  subjectsToRoles: ISubjectsToRoles[];
}
