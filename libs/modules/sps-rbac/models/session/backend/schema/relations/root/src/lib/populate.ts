import { populate as sessionsToAuthentications } from "@sps/sps-rbac-models-session-backend-schema-relations-sessions-to-authentications";

export const populate = (params: any) => {
  return {
    sessionsToAuthentications: sessionsToAuthentications(params),
  } as const;
};
