import { factory } from "@sps/shared-frontend-server-api";
import {
  host,
  route,
  IModel,
  query,
  options,
} from "@sps/rbac/models/subject/sdk/model";
import { action as me } from "./actions/me";
import { action as isAuthorized } from "./actions/is-authorized";
import { action as identities } from "./actions/identities";

export const api = {
  ...factory<IModel>({
    route,
    host,
    options,
    params: query,
  }),
  me,
  isAuthorized,
  identities,
};
