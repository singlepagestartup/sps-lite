"use client";

import {
  IModelExtended,
  route,
  host,
} from "@sps/sps-rbac/models/subject/frontend/api/model";
import { factory, queryClient } from "@sps/shared-frontend-client-api";
export { Provider, queryClient } from "@sps/shared-frontend-client-api";

export const api = factory<IModelExtended>({
  queryClient,
  route,
  host,
});
