import { fetch } from "@sps/utils";
import { populate, route, IModelExtended } from "../../model";

export const api = {
  findOne: async ({ id }: { id: number }) => {
    return await fetch.api.findOne<IModelExtended>({
      id,
      model: route,
      populate,
    });
  },
  find: async () => {
    return await fetch.api.find<IModelExtended[]>({ model: route, populate });
  },
};
