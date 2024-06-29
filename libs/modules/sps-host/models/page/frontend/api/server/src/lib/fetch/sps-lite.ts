import { factory } from "@sps/shared-frontend-server-api";
import { action as findByUrl } from "./actions/find-by-url";
import { action as urls } from "./actions/urls";
import { action as urlSegmentValue } from "./actions/url-segment-value";
import {
  IModelExtended,
  host,
  route,
} from "@sps/sps-host/models/page/frontend/api/model";

export interface Params {
  url?: string | string[];
}

export const api = {
  ...factory<IModelExtended>({
    route,
    host,
  }),
  findByUrl,
  urls,
  urlSegmentValue,
};
