import { factory } from "@sps/shared-frontend-server-api";
import {
  route,
  IRelationExtended,
  host,
} from "@sps/sps-website-builder/relations/buttons-arrays-to-buttons/frontend/api/model";

export const api = factory<IRelationExtended>({
  route,
  host,
});
