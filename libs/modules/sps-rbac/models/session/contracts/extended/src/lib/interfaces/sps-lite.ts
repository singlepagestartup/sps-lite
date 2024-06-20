import { IRelation as ISubjectsToSessions } from "@sps/sps-rbac/relations/subjects-to-sessions/contracts/root";
import { IRelation as ISessionsToAuthentications } from "@sps/sps-rbac/relations/sessions-to-authentications/contracts/root";

import type { IModel as IParentModel } from "@sps/sps-rbac/models/session/contracts/root";

export interface IModel extends IParentModel {
  subjectsToSessions: ISubjectsToSessions[];
  sessionsToAuthentications: ISessionsToAuthentications[];
}
