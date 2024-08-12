import { factory } from "@sps/shared-frontend-server-api";
import {
  route,
  IModel,
  host,
  options,
} from "@sps/sps-ecommerce/relations/widgets-to-orders-list-blocks/sdk/model";

export const api = factory<IModel>({
  route,
  host,
  options,
});
