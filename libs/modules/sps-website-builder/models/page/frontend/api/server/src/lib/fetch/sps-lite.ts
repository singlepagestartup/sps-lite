import { factory } from "@sps/shared-frontend-server-api";
import {
  route,
  IModelExtended,
  host,
} from "@sps/sps-website-builder/models/page/frontend/api/model";
import { action as findByUrl } from "./actions/find-by-url";
import { action as urls } from "./actions/urls";
import { action as generateMetadata } from "./actions/generate-metadata";
import { action as urlSegmentValue } from "./actions/url-segment-value";

export interface Params {
  url?: string | string[];
}

export const api = {
  ...factory<IModelExtended>({
    route,
    host,
  }),
  findByUrl,
  generateMetadata,
  urls,
  urlSegmentValue,
};
