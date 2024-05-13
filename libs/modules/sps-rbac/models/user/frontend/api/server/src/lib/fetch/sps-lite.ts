import { fetch as utilsFetch } from "@sps/shared-frontend-utils-server";
import { populate, route, IModelExtended, tag } from "../model";

export const api = {
  findOne: async ({ id }: { id: number }) => {
    return await utilsFetch.api.findOne<IModelExtended>({
      id,
      model: route,
      populate,
      tag,
      rootPath: "/api",
      revalidate: 0,
    });
  },
  find: async () => {
    return await utilsFetch.api.find<IModelExtended>({
      model: route,
      populate,
      tag,
      rootPath: "/api",
      revalidate: 0,
    });
  },
};
