import type { IRelation as IParentRelation } from "@sps/sps-rbac/relations/sessions-to-authentications/contracts/root";
import { IModel as ISession } from "@sps/sps-rbac/models/session/contracts/root";

import { IModel as IAuthentication } from "@sps/sps-rbac/models/authentication/contracts/root";

export interface IRelation extends IParentRelation {
  session: ISession;

  authentication: IAuthentication;
}
