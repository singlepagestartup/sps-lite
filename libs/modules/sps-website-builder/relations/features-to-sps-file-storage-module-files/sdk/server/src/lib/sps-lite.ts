import { factory } from "@sps/shared-frontend-server-api";
import {
  route,
  host,
  IRelation,
  options,
} from "@sps/sps-website-builder/relations/features-to-sps-file-storage-module-files/sdk/model";

export const api = factory<IRelation>({
  route,
  host,
  options,
});
