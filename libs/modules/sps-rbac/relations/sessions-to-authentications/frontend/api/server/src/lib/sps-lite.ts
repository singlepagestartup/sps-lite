import { factory } from "@sps/shared-frontend-server-api";
import {
  route,
  IRelationExtended,
  host,
  options,
} from "@sps/sps-rbac/relations/sessions-to-authentications/frontend/api/model";

export const api = factory<IRelationExtended>({
  route,
  host,
  options,
});
