import { factory } from "@sps/shared-frontend-server-api";
import {
  host,
  route,
  IModel,
  query,
  options,
} from "@sps/website-builder/models/slider/sdk/model";

export const api = factory<IModel>({
  route,
  host,
  options,
  params: query,
});
