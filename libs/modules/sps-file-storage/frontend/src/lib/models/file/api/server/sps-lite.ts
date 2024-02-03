import { fetch } from "@sps/utils";
import { populate, route, IModelExtended } from "../../_model";

export const api = {
  findOne: async ({ id }: { id: number }) => {
    return await fetch.api.findOne<IModelExtended>({
      id,
      model: route,
      populate,
      rootPath: "/api",
    });
  },
  find: async () => {
    return await fetch.api.find<IModelExtended>({ model: route, populate });
  },
};
