import { factory } from "@sps/shared-frontend-server-api";
import {
  route,
  IModelExtended,
  host,
  query,
} from "@sps/sps-third-parties/models/telegram-message/frontend/api/model";

export const api = factory<IModelExtended>({
  route,
  host,
  params: query,
});
