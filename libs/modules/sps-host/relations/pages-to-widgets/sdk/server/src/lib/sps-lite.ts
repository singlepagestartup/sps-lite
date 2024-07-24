import { factory } from "@sps/shared-frontend-server-api";
import {
  route,
  IRelation,
  host,
  options,
} from "@sps/sps-host/relations/pages-to-widgets/sdk/model";

export const api = factory<IRelation>({
  route,
  host,
  options,
});
