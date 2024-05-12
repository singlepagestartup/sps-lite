import { fetch as utilsFetch } from "@sps/shared-frontend-utils-server";
import { populate, route, IModelExtended } from "../model";

export const api = {
  findById: async ({ id }: { id: number }) => {
    return await utilsFetch.api.findById<IModelExtended>({
      id,
      model: route,
      populate,
    });
  },
  find: async () => {
    return await utilsFetch.api.find<IModelExtended>({
      model: route,
      populate,
    });
  },
};
