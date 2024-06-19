import { fetch as utilsFetch } from "@sps/shared-frontend-utils-server";
import { action as findByUrl } from "./actions/find-by-url";
import { action as urls } from "./actions/urls";
import { action as urlSegmentValue } from "./actions/url-segment-value";
import {
  IModelExtended,
  populate,
  route,
} from "@sps/sps-host-models-page-frontend-api-model";

export interface Params {
  url?: string | string[];
}

export const api = {
  findById: async ({ id }: { id: string }) => {
    return await utilsFetch.api.findById<IModelExtended>({
      id,
      model: route,
      populate,
    });
  },
  find: async (params: any = {}) => {
    return await utilsFetch.api.find<IModelExtended>({
      model: route,
      populate,
      ...params,
    });
  },
  findByUrl,
  urls,
  urlSegmentValue,
};
