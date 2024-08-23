import { factory } from "@sps/shared-frontend-server-api";
import {
  host,
  route,
  IModel,
  query,
  options,
} from "@sps/website-builder/models/buttons-array/sdk/model";

export const api = factory<IModel>({
  route,
  host,
  options,
  params: query,
});
