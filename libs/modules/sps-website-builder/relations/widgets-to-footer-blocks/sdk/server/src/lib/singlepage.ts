import { factory } from "@sps/shared-frontend-server-api";
import {
  route,
  IModel,
  host,
  options,
} from "@sps/sps-website-builder/relations/widgets-to-footer-blocks/sdk/model";

export const api = factory<IModel>({
  route,
  host,
  options,
});
