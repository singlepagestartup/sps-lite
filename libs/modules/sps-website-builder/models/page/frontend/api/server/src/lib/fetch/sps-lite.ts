import { fetch as utilsFetch } from "@sps/shared-frontend-utils-server";
import { populate, route, IModelExtended } from "../model";
import { action as findByUrl } from "./actions/find-by-url";
import { action as urls } from "./actions/urls";
import { action as generateMetadata } from "./actions/generate-metadata";
import { action as urlSegmentValue } from "./actions/url-segment-value";

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
  generateMetadata,
  urls,
  urlSegmentValue,
};
