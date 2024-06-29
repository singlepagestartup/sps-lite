import { factory } from "@sps/shared-frontend-server-api";
import {
  route,
  host,
  IModelExtended,
} from "@sps/sps-website-builder/models/footer/frontend/api/model";

export const api = factory<IModelExtended>({
  route,
  host,
});
