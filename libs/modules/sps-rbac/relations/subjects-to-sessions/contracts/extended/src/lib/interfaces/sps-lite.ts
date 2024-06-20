import type { IRelation as IParentRelation } from "@sps/sps-rbac/relations/subjects-to-sessions/contracts/root";
import { IModel as ISubject } from "@sps/sps-rbac/models/subject/contracts/root";

import { IModel as ISession } from "@sps/sps-rbac/models/session/contracts/root";

export interface IRelation extends IParentRelation {
  subject: ISubject;

  session: ISession;
}
