"use client";

import {
  IRelation,
  route,
  host,
  options,
} from "@sps/sps-website-builder/relations/slider-blocks-to-sliders/sdk/model";
import { factory, queryClient } from "@sps/shared-frontend-client-api";
export { Provider, queryClient } from "@sps/shared-frontend-client-api";

export const api = factory<IRelation>({
  queryClient,
  route,
  host,
  options,
});