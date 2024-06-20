import { fetch as utilsFetch } from "@sps/shared-frontend-utils-server";
import { populate, route, IModelExtended } from "../model";

export const api = {
  findOne: async ({ id }: { id: string }) => {
    return await utilsFetch.api.findOne<IModelExtended>({
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
