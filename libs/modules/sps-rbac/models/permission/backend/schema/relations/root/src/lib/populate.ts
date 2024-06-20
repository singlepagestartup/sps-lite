import { populate as rolesToPermissions } from "@sps/sps-rbac/models/permission/backend/schema/relations/roles-to-permissions";
export const populate = (params: any) => {
  return { rolesToPermissions: rolesToPermissions(params) } as const;
};
