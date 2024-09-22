import { factory } from "@sps/shared-frontend-server-api";
import {
  host,
  route,
  IModel,
  query,
  options,
} from "@sps/notification/models/topic/sdk/model";
import { action as sendAll } from "./actions/send-all";

export const api = {
  ...factory<IModel>({
    route,
    host,
    options,
    params: query,
  }),
  sendAll,
};
