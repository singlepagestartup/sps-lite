import { factory } from "@sps/shared-frontend-server-api";
import {
  host,
  route,
  IModel,
  query,
  options,
} from "@sps/file-storage/models/file/sdk/model";
import { action as createFromUrl } from "./actions/create-from-url";

export const api = {
  ...factory<IModel>({
    route,
    host,
    options,
    params: query,
  }),
  createFromUrl,
};
