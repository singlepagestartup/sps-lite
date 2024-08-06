import { factory } from "@sps/shared-frontend-server-api";
import {
  route,
  IModel,
  host,
  options,
} from "@sps/sps-file-storage/relations/widgets-to-files/sdk/model";

export const api = factory<IModel>({
  route,
  host,
  options,
});
