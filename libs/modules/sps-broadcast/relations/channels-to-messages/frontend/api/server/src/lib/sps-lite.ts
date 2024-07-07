import { factory } from "@sps/shared-frontend-server-api";
import {
  host,
  route,
  IRelationExtended,
  options,
} from "@sps/sps-broadcast/relations/channels-to-messages/frontend/api/model";

export const api = factory<IRelationExtended>({
  route,
  host,
  options,
});
