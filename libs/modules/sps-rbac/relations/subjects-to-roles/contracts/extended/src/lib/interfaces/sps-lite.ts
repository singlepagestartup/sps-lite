import type { IRelation as IParentRelation } from "@sps/sps-rbac/relations/subjects-to-roles/contracts/root";
import { IModel as ISubject } from "@sps/sps-rbac/models/subject/contracts/root";

import { IModel as IRole } from "@sps/sps-rbac/models/role/contracts/root";

export interface IRelation extends IParentRelation {
  subject: ISubject;

  role: IRole;
}
