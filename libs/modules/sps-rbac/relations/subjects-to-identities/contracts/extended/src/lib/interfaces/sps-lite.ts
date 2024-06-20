import type { IRelation as IParentRelation } from "@sps/sps-rbac/relations/subjects-to-identities/contracts/root";
import { IModel as ISubject } from "@sps/sps-rbac/models/subject/contracts/root";

import { IModel as IIdentity } from "@sps/sps-rbac/models/identity/contracts/root";

export interface IRelation extends IParentRelation {
  subject: ISubject;

  identity: IIdentity;
}
