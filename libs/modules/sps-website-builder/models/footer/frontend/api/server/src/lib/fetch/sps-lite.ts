import { actions } from "@sps/shared-frontend-server-api";
import { route, tag, IModelExtended } from "../model";

export const api = {
  findById: async ({ id }: { id: string }) => {
    return await actions.findById<IModelExtended>({
      id,
      model: route,
      path: "/api/sps-website-builder",
      tag,
    });
  },
  find: async (params?: any) => {
    return await actions.find<IModelExtended>({
      model: route,
      path: "/api/sps-website-builder",
      tag,
      params,
    });
  },
};
