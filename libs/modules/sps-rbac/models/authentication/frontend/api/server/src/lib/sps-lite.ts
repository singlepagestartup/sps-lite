import { factory } from "@sps/shared-frontend-server-api";
import { action as isAuthenticated } from "./actions/is-authenticated";
import {
  host,
  route,
  IModelExtended,
  query,
} from "@sps/sps-rbac/models/authentication/frontend/api/model";

export const api = {
  ...factory<IModelExtended>({
    route,
    host,
    params: query,
  }),
  isAuthenticated,
};
