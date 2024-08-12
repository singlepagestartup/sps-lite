import { factory } from "@sps/shared-frontend-server-api";
import {
  route,
  IModel,
  host,
  options,
} from "@sps/sps-ecommerce/relations/widgets-to-product-overview-blocks/sdk/model";

export const api = factory<IModel>({
  route,
  host,
  options,
});
