import { factory } from "@sps/shared-frontend-server-api";
import {
  route,
  IModelExtended,
  host,
} from "@sps/sps-rbac/models/authentication-block/frontend/api/model";

export const api = factory<IModelExtended>({
  route,
  host,
});
