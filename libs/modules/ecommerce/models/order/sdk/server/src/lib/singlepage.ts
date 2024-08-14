import { factory } from "@sps/shared-frontend-server-api";
import {
  host,
  route,
  IModel,
  query,
  options,
} from "@sps/ecommerce/models/order/sdk/model";
import { action as checkout } from "./actions/checkout";

export const api = {
  ...factory<IModel>({
    route,
    host,
    options,
    params: query,
  }),
  checkout,
};
