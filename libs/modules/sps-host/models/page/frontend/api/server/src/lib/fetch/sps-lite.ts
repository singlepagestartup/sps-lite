import { actions } from "@sps/shared-frontend-server-api";
import { action as findByUrl } from "./actions/find-by-url";
import { action as urls } from "./actions/urls";
import { action as urlSegmentValue } from "./actions/url-segment-value";
import {
  IModelExtended,
  populate,
  route,
} from "@sps/sps-host/models/page/frontend/api/model";

export interface Params {
  url?: string | string[];
}

export const api = {
  findById: async ({ id }: { id: string }) => {
    return await actions.findById<IModelExtended>({
      id,
      path: "/api/sps-host",
      model: route,
      params: {
        populate,
      },
    });
  },
  find: async (params: any = {}) => {
    return await actions.find<IModelExtended>({
      model: route,
      path: "/api/sps-host",
      params: {
        ...params,
        populate,
      },
    });
  },
  findByUrl,
  urls,
  urlSegmentValue,
};
