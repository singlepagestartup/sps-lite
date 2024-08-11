"use client";

import {
  IModel,
  route,
  host,
  query,
  options,
} from "@sps/sps-crm/models/customer/sdk/model";
import { factory, queryClient } from "@sps/shared-frontend-client-api";
export { Provider, queryClient } from "@sps/shared-frontend-client-api";

export const api = factory<IModel>({
  queryClient,
  route,
  host,
  params: query,
  options,
});
