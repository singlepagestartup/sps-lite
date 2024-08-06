import { factory } from "@sps/shared-frontend-server-api";
import {
  host,
  route,
  IModel,
  options,
} from "@sps/sps-broadcast/relations/channels-to-messages/sdk/model";

export const api = factory<IModel>({
  route,
  host,
  options,
});
