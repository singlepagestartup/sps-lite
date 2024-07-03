import { factory } from "@sps/shared-frontend-server-api";
import {
  host,
  route,
  IModelExtended,
} from "@sps/sps-host/models/widget/frontend/api/model";

export const api = factory<IModelExtended>({
  route,
  host,
});
