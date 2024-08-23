import { factory } from "@sps/shared-frontend-server-api";
import {
  host,
  route,
  IModel,
  query,
  options,
} from "@sps/host/models/metadata/sdk/model";
import { action as generate } from "./actions/generate";

export const api = {
  ...factory<IModel>({
    route,
    host,
    params: query,
    options,
  }),
  generate,
};
