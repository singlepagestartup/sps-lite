import { factory } from "@sps/shared-frontend-server-api";
import {
  route,
  IRelationExtended,
  host,
  options,
} from "@sps/sps-host/relations/pages-to-layouts/frontend/api/model";

export const api = factory<IRelationExtended>({
  route,
  host,
  options,
});
