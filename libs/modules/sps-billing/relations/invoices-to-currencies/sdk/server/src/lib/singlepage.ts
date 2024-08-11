import { factory } from "@sps/shared-frontend-server-api";
import {
  route,
  IModel,
  host,
  options,
} from "@sps/sps-billing/relations/invoices-to-currencies/sdk/model";

export const api = factory<IModel>({
  route,
  host,
  options,
});
