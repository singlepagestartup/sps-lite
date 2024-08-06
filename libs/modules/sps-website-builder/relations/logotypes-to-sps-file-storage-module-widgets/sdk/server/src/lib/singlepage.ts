import { factory } from "@sps/shared-frontend-server-api";
import {
  route,
  IModel,
  host,
  options,
} from "@sps/sps-website-builder/relations/logotypes-to-sps-file-storage-module-widgets/sdk/model";

export const api = factory<IModel>({
  route,
  host,
  options,
});
