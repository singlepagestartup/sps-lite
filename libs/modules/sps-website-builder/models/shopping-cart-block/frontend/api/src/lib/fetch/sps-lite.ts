import { fetch as utilsFetch } from "@sps/shared-frontend-utils-client";
import { populate, route, IModelExtended } from "../model";

export const api = {
  findOne: async ({ id }: { id: number }) => {
    const data = await utilsFetch.api.findOne<IModelExtended>({
      id,
      model: route,
      populate,
    });

    return data;
  },
  find: async () => {
    return await utilsFetch.api.find<IModelExtended>({
      model: route,
      populate,
    });
  },
};
