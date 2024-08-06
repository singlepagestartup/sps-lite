import { factory } from "@sps/shared-frontend-server-api";
import {
  route,
  IModel,
  host,
  options,
} from "@sps/sps-rbac/relations/widgets-to-identities-blocks/sdk/model";

export const api = factory<IModel>({
  route,
  host,
  options,
});
