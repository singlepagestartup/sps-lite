import { fetch as utilsFetch } from "@sps/shared-frontend-utils-server";
import { action as isAuthenticated } from "./actions/is-authenticated";
import {
  populate,
  route,
  IModelExtended,
} from "@sps/sps-rbac/models/authentication/frontend/api/model";

export const api = {
  findById: async ({ id }: { id: string }) => {
    return await utilsFetch.api.findById<IModelExtended>({
      id,
      model: route,
      populate,
      rootPath: "/api/sps-rbac",
    });
  },
  find: async () => {
    return await utilsFetch.api.find<IModelExtended>({
      model: route,
      populate,
      rootPath: "/api/sps-rbac",
    });
  },
  isAuthenticated,
};
