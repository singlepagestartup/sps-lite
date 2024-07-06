"use client";

import {
  IModelExtended,
  route,
  host,
  query,
  options,
} from "@sps/sps-third-parties/models/widget/frontend/api/model";
import { factory, queryClient } from "@sps/shared-frontend-client-api";
export { Provider, queryClient } from "@sps/shared-frontend-client-api";

export const api = factory<IModelExtended>({
  queryClient,
  route,
  host,
  params: query,
  options,
});
