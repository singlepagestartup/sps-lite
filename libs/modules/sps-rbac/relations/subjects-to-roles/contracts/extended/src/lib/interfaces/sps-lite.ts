import type { IRelation as IParentRelation } from "@sps/sps-rbac-relations-subjects-to-roles-contracts";
import { IModel as ISubject } from "@sps/sps-rbac-models-subject-contracts";

import { IModel as IRole } from "@sps/sps-rbac-models-role-contracts";

export interface IRelation extends IParentRelation {
  subject: ISubject;

  role: IRole;
}
