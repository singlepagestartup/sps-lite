import { populate as usersToRoles } from "@sps/sps-rbac-models-user-backend-schema-relations-users-to-roles";
import { populate as usersToIdentities } from "@sps/sps-rbac-models-user-backend-schema-relations-users-to-identities";
export const populate = (params: any) => {
  return {
    usersToRoles: usersToRoles(params),
    usersToIdentities: usersToIdentities(params),
  } as const;
};
