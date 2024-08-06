import { factory } from "@sps/shared-frontend-server-api";
import {
  route,
  IModel,
  host,
  options,
} from "@sps/sps-rbac/relations/sessions-to-authentications/sdk/model";

export const api = factory<IModel>({
  route,
  host,
  options,
});
