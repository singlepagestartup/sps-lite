import { factory } from "@sps/shared-frontend-server-api";
import {
  route,
  IRelationExtended,
  host,
  options,
} from "@sps/sps-host/relations/widgets-to-external-modules/frontend/api/model";

export const api = factory<IRelationExtended>({
  route,
  host,
  options,
});
