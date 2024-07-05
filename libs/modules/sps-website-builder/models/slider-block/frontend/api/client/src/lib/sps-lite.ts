"use client";

import {
  IModelExtended,
  route,
  host,
  query,
} from "@sps/sps-website-builder/models/slider-block/frontend/api/model";
import { factory, queryClient } from "@sps/shared-frontend-client-api";
export { Provider, queryClient } from "@sps/shared-frontend-client-api";

export const api = factory<IModelExtended>({
  queryClient,
  route,
  host,
  params: query,
});
