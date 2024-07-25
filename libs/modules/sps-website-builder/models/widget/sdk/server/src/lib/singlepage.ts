import { factory } from "@sps/shared-frontend-server-api";
import {
  route,
  host,
  IModel,
  query,
  options,
} from "@sps/sps-website-builder/models/widget/sdk/model";

export const api = factory<IModel>({
  route,
  host,
  options,
  params: query,
});
