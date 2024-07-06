"use client";

import {
  IRelationExtended,
  route,
  host,
  options,
} from "@sps/sps-website-builder/relations/widgets-to-navbar-blocks/frontend/api/model";
import { factory, queryClient } from "@sps/shared-frontend-client-api";
export { Provider, queryClient } from "@sps/shared-frontend-client-api";

export const api = factory<IRelationExtended>({
  queryClient,
  route,
  host,
  options,
});
