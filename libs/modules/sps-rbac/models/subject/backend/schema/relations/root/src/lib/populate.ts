import { populate as subjectsToSessions } from "@sps/sps-rbac-models-subject-backend-schema-relations-subjects-to-sessions";
import { populate as subjectsToIdentities } from "@sps/sps-rbac-models-subject-backend-schema-relations-subjects-to-identities";
import { populate as subjectsToRoles } from "@sps/sps-rbac-models-subject-backend-schema-relations-subjects-to-roles";
export const populate = (params: any) => {
  return {
    subjectsToSessions: subjectsToSessions(params),
    subjectsToIdentities: subjectsToIdentities(params),
    subjectsToRoles: subjectsToRoles(params),
  } as const;
};
