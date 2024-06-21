import { actions } from "@sps/shared-frontend-server-api";
import {
  populate,
  route,
  IModelExtended,
} from "@sps/sps-host/models/metadata/frontend/api/model";
import { action as generate } from "./actions/generate";

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
  generate,
};
