import { factory } from "@sps/shared-frontend-server-api";
import { action as isAuthenticated } from "./actions/is-authenticated";
import {
  host,
  route,
  IModel,
  query,
  options,
} from "@sps/sps-rbac/models/authentication/sdk/model";

export const api = {
  ...factory<IModel>({
    route,
    host,
    params: query,
    options,
  }),
  isAuthenticated,
};
