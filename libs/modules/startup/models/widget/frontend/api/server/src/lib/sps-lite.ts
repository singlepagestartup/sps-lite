import { factory } from "@sps/shared-frontend-server-api";
import {
  host,
  route,
  IModelExtended,
  query,
} from "@sps/startup/models/widget/frontend/api/model";

export const api = factory<IModelExtended>({
  route,
  host,
  params: query,
});
