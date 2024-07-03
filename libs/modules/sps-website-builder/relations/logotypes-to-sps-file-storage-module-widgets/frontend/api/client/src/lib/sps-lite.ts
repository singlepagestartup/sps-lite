"use client";

import {
  IRelationExtended,
  route,
  host,
} from "@sps/sps-website-builder/relations/logotypes-to-sps-file-storage-module-widgets/frontend/api/model";
import { factory, queryClient } from "@sps/shared-frontend-client-api";
export { Provider, queryClient } from "@sps/shared-frontend-client-api";

export const api = factory<IRelationExtended>({
  queryClient,
  route,
  host,
});
