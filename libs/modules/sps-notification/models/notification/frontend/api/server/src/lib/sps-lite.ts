import { factory } from "@sps/shared-frontend-server-api";
import {
  route,
  IModelExtended,
  host,
  query,
} from "@sps/sps-notification/models/notification/frontend/api/model";

export const api = factory<IModelExtended>({
  route,
  host,
  params: query,
});
