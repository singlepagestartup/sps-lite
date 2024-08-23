import { factory } from "@sps/shared-frontend-server-api";
import {
  host,
  route,
  IModel,
  query,
  options,
} from "@sps/rbac/models/action/sdk/model";
import { action as findByRoute } from "./actions/find-by-route";

export const api = {
  ...factory<IModel>({
    route,
    host,
    options,
    params: query,
  }),
  findByRoute,
};
