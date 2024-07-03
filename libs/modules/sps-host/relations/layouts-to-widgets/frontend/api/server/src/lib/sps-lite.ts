import { factory } from "@sps/shared-frontend-server-api";
import {
  route,
  IRelationExtended,
  host,
} from "@sps/sps-host/relations/layouts-to-widgets/frontend/api/model";

export const api = factory<IRelationExtended>({
  route,
  host,
});
