"use client";

import {
  IModel,
  route,
  host,
  options,
} from "@sps/sps-rbac/relations/subjects-to-identities/sdk/model";
import { factory, queryClient } from "@sps/shared-frontend-client-api";
export { Provider, queryClient } from "@sps/shared-frontend-client-api";

export const api = factory<IModel>({
  queryClient,
  route,
  host,
  options,
});
