import type { IRelation as IParentRelation } from "@sps/sps-rbac-relations-users-to-sessions-contracts";
import { IModel as IUser } from "@sps/sps-rbac-models-user-contracts";

import { IModel as ISession } from "@sps/sps-rbac-models-session-contracts";

export interface IRelation extends IParentRelation {
  user: IUser;

  session: ISession;
}
