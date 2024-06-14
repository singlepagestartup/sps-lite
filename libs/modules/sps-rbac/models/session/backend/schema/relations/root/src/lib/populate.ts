import { populate as subjectsToSessions } from "@sps/sps-rbac-models-session-backend-schema-relations-subjects-to-sessions";
import { populate as sessionsToAuthentications } from "@sps/sps-rbac-models-session-backend-schema-relations-sessions-to-authentications";

export const populate = (params: any) => {
  return {
    subjectsToSessions: subjectsToSessions(params),
    sessionsToAuthentications: sessionsToAuthentications(params),
  } as const;
};
