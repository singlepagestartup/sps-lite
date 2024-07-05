import { factory } from "@sps/shared-frontend-server-api";
import {
  route,
  IModelExtended,
  host,
  query,
} from "@sps/sps-rbac/models/permission/frontend/api/model";

export const api = factory<IModelExtended>({
  route,
  host,
  params: query,
});
