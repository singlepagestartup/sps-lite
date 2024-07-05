import { factory } from "@sps/shared-frontend-server-api";
import {
  route,
  IModelExtended,
  host,
  query,
} from "@sps/sps-host/models/metadata/frontend/api/model";
import { action as generate } from "./actions/generate";

export const api = {
  ...factory<IModelExtended>({
    route,
    host,
    params: query,
  }),
  generate,
};
