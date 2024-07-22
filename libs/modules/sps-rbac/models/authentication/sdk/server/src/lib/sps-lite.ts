import { factory } from "@sps/shared-frontend-server-api";
import { action as isAllowed } from "./actions/is-allowed";
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
  isAllowed,
};
