import { IRelation as ISessionsToAuthentications } from "@sps/sps-rbac/relations/sessions-to-authentications/contracts/root";
import type { IModel as IParentModel } from "@sps/sps-rbac/models/authentication/contracts/root";

export interface IModel extends IParentModel {
  sessionsToAuthentications: ISessionsToAuthentications[];
}
