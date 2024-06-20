import type { IRelation as IParentRelation } from "@sps/sps-rbac/relations/roles-to-permissions/contracts/root";
import { IModel as IRole } from "@sps/sps-rbac/models/role/contracts/root";

import { IModel as IPermission } from "@sps/sps-rbac/models/permission/contracts/root";

export interface IRelation extends IParentRelation {
  role: IRole;

  permission: IPermission;
}
