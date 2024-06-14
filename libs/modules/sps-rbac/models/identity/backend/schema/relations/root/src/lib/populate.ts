import { populate as subjectsToIdentities } from "@sps/sps-rbac-models-identity-backend-schema-relations-subjects-to-identities";
export const populate = (params: any) => {
  return { subjectsToIdentities: subjectsToIdentities(params) } as const;
};
