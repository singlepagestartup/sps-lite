import { factory } from "@sps/shared-frontend-server-api";
import {
  route,
  IRelationExtended,
  host,
  options,
} from "@sps/sps-host/relations/pages-to-metadata/frontend/api/model";

export const api = factory<IRelationExtended>({
  route,
  host,
  options,
});
