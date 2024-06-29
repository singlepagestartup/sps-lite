import { factory } from "@sps/shared-frontend-server-api";
import {
  route,
  IModelExtended,
  host,
} from "@sps/sps-rbac/models/widget/frontend/api/model";

export const api = factory<IModelExtended>({
  route,
  host,
});
