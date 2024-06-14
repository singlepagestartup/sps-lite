import { populate as rolesToPermissions } from "@sps/sps-rbac-models-role-backend-schema-relations-roles-to-permissions";
import { populate as subjectsToRoles } from "@sps/sps-rbac-models-role-backend-schema-relations-subjects-to-roles";
export const populate = (params: any) => {
  return {
    rolesToPermissions: rolesToPermissions(params),
    subjectsToRoles: subjectsToRoles(params),
  } as const;
};
