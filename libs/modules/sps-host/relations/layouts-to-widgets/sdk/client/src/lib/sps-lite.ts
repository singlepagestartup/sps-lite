"use client";

import {
  IRelation,
  route,
  host,
  options,
} from "@sps/sps-host/relations/layouts-to-widgets/sdk/model";
import { factory, queryClient } from "@sps/shared-frontend-client-api";
export { Provider, queryClient } from "@sps/shared-frontend-client-api";

export const api = factory<IRelation>({
  queryClient,
  route,
  host,
  options,
});
