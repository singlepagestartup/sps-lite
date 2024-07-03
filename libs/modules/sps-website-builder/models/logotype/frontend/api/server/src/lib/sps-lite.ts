import { factory } from "@sps/shared-frontend-server-api";
import {
  route,
  IModelExtended,
  host,
} from "@sps/sps-website-builder/models/logotype/frontend/api/model";

export const api = factory<IModelExtended>({
  route,
  host,
});
