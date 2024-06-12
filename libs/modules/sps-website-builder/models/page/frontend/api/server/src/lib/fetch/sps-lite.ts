import { fetch as utilsFetch } from "@sps/shared-frontend-utils-server";
import { populate, route, IModelExtended } from "../model";
import { action as getByUrl } from "./actions/get-by-url";
import { action as getPage } from "./actions/get-page";
import { action as getUrls } from "./actions/get-urls";
import { action as getUrlModelId } from "./actions/get-url-model-id";
import { action as generateMetadata } from "./actions/generate-metadata";
import { action as getFiltersFromUrl } from "./actions/get-filters-from-url";

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
  getFiltersFromUrl,
  getByUrl,
  getPage,
  getUrlModelId,
  generateMetadata,
  getUrls,
};
