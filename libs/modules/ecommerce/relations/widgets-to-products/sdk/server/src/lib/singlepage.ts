import { factory } from "@sps/shared-frontend-server-api";
import {
  route,
  IModel,
  host,
  options,
} from "@sps/ecommerce/relations/widgets-to-products/sdk/model";

export const api = factory<IModel>({
  route,
  host,
  options,
});
