import { populate as sessionsToAuthentications } from "@sps/sps-rbac-models-authentication-backend-schema-relations-sessions-to-authentications";
export const populate = (params: any) => {
  return {
    sessionsToAuthentications: sessionsToAuthentications(params),
  } as const;
};
