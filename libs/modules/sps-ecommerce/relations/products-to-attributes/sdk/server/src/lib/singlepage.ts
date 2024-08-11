import { factory } from "@sps/shared-frontend-server-api";
import {
  route,
  IModel,
  host,
  options,
} from "@sps/sps-ecommerce/relations/products-to-attributes/sdk/model";

export const api = factory<IModel>({
  route,
  host,
  options,
});
