import { IRelation as IRolesToPermissions } from "@sps/sps-rbac/relations/roles-to-permissions/contracts/root";
import type { IModel as IParentModel } from "@sps/sps-rbac/models/permission/contracts/root";

export interface IModel extends IParentModel {
  rolesToPermissions: IRolesToPermissions[];
}
