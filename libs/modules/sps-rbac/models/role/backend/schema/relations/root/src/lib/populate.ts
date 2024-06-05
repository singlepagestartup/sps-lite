import { populate as usersToRoles } from "@sps/sps-rbac-models-role-backend-schema-relations-users-to-roles";
export const populate = (params: any) => {
  return { usersToRoles: usersToRoles(params) } as const;
};
