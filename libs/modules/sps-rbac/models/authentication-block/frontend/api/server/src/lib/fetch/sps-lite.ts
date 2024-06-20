import {
  fetch as utilsFetch,
  actions,
} from "@sps/shared-frontend-utils-server";
import {
  populate,
  route,
  IModelExtended,
} from "@sps/sps-rbac/models/authentication-block/frontend/api/model";

export const api = {
  findById: async ({ id }: { id: string }) => {
    return await actions.findById<IModelExtended>({
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
};
