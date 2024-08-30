import { factory } from "@sps/shared-frontend-server-api";
import {
  route,
  IModel,
  host,
  options,
} from "@sps/notification/relations/notifications-to-templates/sdk/model";

export const api = factory<IModel>({
  route,
  host,
  options,
});
