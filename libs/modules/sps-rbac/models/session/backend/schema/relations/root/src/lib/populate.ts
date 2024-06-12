import { populate as sessionsToAuthentications } from "@sps/sps-rbac-models-session-backend-schema-relations-sessions-to-authentications";
import { populate as usersToSessions } from "@sps/sps-rbac-models-session-backend-schema-relations-users-to-sessions";
export const populate = (params: any) => {
  return {
    sessionsToAuthentications: sessionsToAuthentications(params),
    usersToSessions: usersToSessions(params),
  } as const;
};
