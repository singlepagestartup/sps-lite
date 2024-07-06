import { factory } from "@sps/shared-frontend-server-api";
import {
  route,
  IRelationExtended,
  host,
  options,
} from "@sps/sps-website-builder/relations/slides-to-sps-file-storage-module-widgets/frontend/api/model";

export const api = factory<IRelationExtended>({
  route,
  host,
  options,
});
