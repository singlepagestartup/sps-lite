import { actions } from "@sps/shared-frontend-server-api";
import {
  tag,
  populate,
  route,
  IModelExtended,
} from "@sps/startup/models/widget/frontend/api/model";

export const api = {
  findById: async ({ id }: { id: string }) => {
    return await actions.findById<IModelExtended>({
      id,
      model: route,
      path: "/api/startup",
      tag,
    });
  },
  find: async (params?: any) => {
    return await actions.find<IModelExtended>({
      model: route,
      path: "/api/startup",
      tag,
      params,
    });
  },
};
