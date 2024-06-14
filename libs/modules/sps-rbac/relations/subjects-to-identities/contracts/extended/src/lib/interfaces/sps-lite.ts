import type { IRelation as IParentRelation } from "@sps/sps-rbac-relations-subjects-to-identities-contracts";
import { IModel as ISubject } from "@sps/sps-rbac-models-subject-contracts";

import { IModel as IIdentity } from "@sps/sps-rbac-models-identity-contracts";

export interface IRelation extends IParentRelation {
  subject: ISubject;

  identity: IIdentity;
}
