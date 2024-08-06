import { factory } from "@sps/shared-frontend-server-api";
import {
  route,
  host,
  IModel,
  options,
} from "@sps/sps-website-builder/relations/features-to-sps-file-storage-module-widgets/sdk/model";

export const api = factory<IModel>({
  route,
  host,
  options,
});
