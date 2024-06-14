import { populate as subjectsToRoles } from "@sps/sps-rbac-models-role-backend-schema-relations-subjects-to-roles";
export const populate = (params: any) => {
  return { subjectsToRoles: subjectsToRoles(params) } as const;
};
