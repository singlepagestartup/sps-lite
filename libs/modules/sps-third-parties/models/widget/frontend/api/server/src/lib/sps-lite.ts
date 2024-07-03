import { factory } from "@sps/shared-frontend-server-api";
import {
  route,
  IModelExtended,
  host,
} from "@sps/sps-third-parties/models/widget/frontend/api/model";

export const api = factory<IModelExtended>({
  route,
  host,
});
