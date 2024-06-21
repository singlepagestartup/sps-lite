import { actions } from "@sps/shared-frontend-server-api";
import {
  route,
  IModelExtended,
} from "@sps/sps-host/models/widget/frontend/api/model";

export const api = {
  findById: async ({ id }: { id: string }) => {
    return await actions.findById<IModelExtended>({
      id,
      model: route,
      path: "/api/sps-host",
    });
  },
  find: async () => {
    return await actions.find<IModelExtended>({
      model: route,
      path: "/api/sps-host",
    });
  },
};
