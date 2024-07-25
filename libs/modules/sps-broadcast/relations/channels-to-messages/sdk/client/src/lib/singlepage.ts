"use client";

import {
  IRelation,
  route,
  host,
  query,
  options,
} from "@sps/sps-broadcast/relations/channels-to-messages/sdk/model";
import { factory, queryClient } from "@sps/shared-frontend-client-api";
export { Provider, queryClient } from "@sps/shared-frontend-client-api";

export const api = factory<IRelation>({
  queryClient,
  route,
  host,
  params: query,
  options,
});
