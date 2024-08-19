import { factory } from "@sps/shared-frontend-server-api";
import {
  route,
  IModel,
  host,
  options,
} from "@sps/rbac/relations/subjects-to-ecommerce-module-orders/sdk/model";

export const api = factory<IModel>({
  route,
  host,
  options,
});
