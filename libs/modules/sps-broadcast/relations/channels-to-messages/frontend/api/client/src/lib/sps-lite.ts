"use client";

import {
  IRelationExtended,
  route,
  host,
  query,
  options,
} from "@sps/sps-broadcast/relations/channels-to-messages/frontend/api/model";
import { factory, queryClient } from "@sps/shared-frontend-client-api";
export { Provider, queryClient } from "@sps/shared-frontend-client-api";

export const api = factory<IRelationExtended>({
  queryClient,
  route,
  host,
  params: query,
  options,
});
