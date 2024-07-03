import { factory } from "@sps/shared-frontend-server-api";
import {
  route,
  IRelationExtended,
  host,
} from "@sps/sps-file-storage/relations/widgets-to-files/frontend/api/model";

export const api = factory<IRelationExtended>({
  route,
  host,
});
