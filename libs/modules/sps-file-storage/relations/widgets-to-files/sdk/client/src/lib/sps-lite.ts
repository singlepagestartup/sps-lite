"use client";

import {
  IRelation,
  route,
  host,
  options,
} from "@sps/sps-file-storage/relations/widgets-to-files/sdk/model";
import { factory, queryClient } from "@sps/shared-frontend-client-api";
export { Provider, queryClient } from "@sps/shared-frontend-client-api";

export const api = factory<IRelation>({
  queryClient,
  route,
  host,
  options,
});