import { factory } from "@sps/shared-frontend-server-api";
import {
  host,
  route,
  IRelation,
  options,
} from "@sps/sps-broadcast/relations/channels-to-messages/sdk/model";

export const api = factory<IRelation>({
  route,
  host,
  options,
});
