import { factory } from "@sps/shared-frontend-server-api";
import {
  route,
  host,
  IModelExtended,
  query,
} from "@sps/sps-website-builder/models/widget/frontend/api/model";

export const api = factory<IModelExtended>({
  route,
  host,
  params: query,
});
