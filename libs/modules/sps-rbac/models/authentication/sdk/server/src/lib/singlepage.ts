import { factory } from "@sps/shared-frontend-server-api";
import { action as isAuthorized } from "./actions/is-authorized";
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
  isAuthorized,
};
