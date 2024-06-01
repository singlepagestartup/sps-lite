import { fetch as utilsFetch } from "@sps/shared-frontend-utils-server";
import {
  populate,
  route,
  IRelationExtended,
} from "@sps/sps-rbac-relations-widgets-to-authentication-blocks-frontend-api-model";

export const api = {
  findById: async ({ id }: { id: number | string }) => {
    return await utilsFetch.api.findOne<IRelationExtended>({
      id,
      model: route,
      populate,
      rootPath: "/api/sps-rbac",
    });
  },
  find: async () => {
    return await utilsFetch.api.find<IRelationExtended>({
      model: route,
      populate,
      rootPath: "/api/sps-rbac",
    });
  },
};
