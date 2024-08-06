"use client";

import {
  IModel,
  route,
  host,
  options,
} from "@sps/sps-website-builder/relations/navbar-blocks-to-buttons-arrays/sdk/model";
import { factory, queryClient } from "@sps/shared-frontend-client-api";
export { Provider, queryClient } from "@sps/shared-frontend-client-api";

export const api = factory<IModel>({
  queryClient,
  route,
  host,
  options,
});
