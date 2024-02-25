import { fetch } from "@sps/shared-frontend-utils";
import { populate, route, IModelExtended } from "../model";

export const api = {
  findOne: async ({ id }: { id: number }) => {
    const data = await fetch.api.findOne<IModelExtended>({
      id,
      model: route,
      populate,
    });

    return data;
  },
  find: async () => {
    return await fetch.api.find<IModelExtended>({ model: route, populate });
  },
};
