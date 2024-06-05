import { populate as usersToIdentities } from "@sps/sps-rbac-models-identity-backend-schema-relations-users-to-identities";
export const populate = (params: any) => {
  return { usersToIdentities: usersToIdentities(params) } as const;
};
