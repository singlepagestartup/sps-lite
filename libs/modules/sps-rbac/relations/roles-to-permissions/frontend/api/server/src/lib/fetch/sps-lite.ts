import { factory } from "@sps/shared-frontend-server-api";
import {
  route,
  IRelationExtended,
  host,
} from "@sps/sps-rbac/relations/roles-to-permissions/frontend/api/model";

export const api = factory<IRelationExtended>({
  route,
  host,
});
