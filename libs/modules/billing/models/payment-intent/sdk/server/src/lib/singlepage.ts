import { factory } from "@sps/shared-frontend-server-api";
import {
  host,
  route,
  IModel,
  query,
  options,
} from "@sps/billing/models/payment-intent/sdk/model";
import { action as provider } from "./actions/provider";

export const api = {
  provider,
  ...factory<IModel>({
    route,
    host,
    options,
    params: query,
  }),
};
