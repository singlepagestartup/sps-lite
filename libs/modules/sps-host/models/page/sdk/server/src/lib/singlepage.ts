import { factory } from "@sps/shared-frontend-server-api";
import { action as findByUrl } from "./actions/find-by-url";
import { action as urls } from "./actions/urls";
import { action as urlSegmentValue } from "./actions/url-segment-value";
import {
  IModel,
  host,
  route,
  query,
} from "@sps/sps-host/models/page/sdk/model";

export interface Params {
  url?: string | string[];
}

export const api = {
  ...factory<IModel>({
    route,
    host,
    params: query,
  }),
  findByUrl,
  urls,
  urlSegmentValue,
};
