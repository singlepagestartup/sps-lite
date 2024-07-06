import { factory } from "@sps/shared-frontend-server-api";
import {
  route,
  host,
  IRelationExtended,
  options,
} from "@sps/sps-website-builder/relations/features-to-sps-file-storage-module-files/frontend/api/model";

export const api = factory<IRelationExtended>({
  route,
  host,
  options,
});
