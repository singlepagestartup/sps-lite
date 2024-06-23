import { actions } from "@sps/shared-frontend-server-api";
import {
  route,
  tag,
  IModelExtended,
} from "@sps/sps-website-builder/models/widget/frontend/api/model";

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
