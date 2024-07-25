import { factory } from "@sps/shared-frontend-server-api";
import {
  route,
  IRelation,
  host,
  options,
} from "@sps/sps-file-storage/relations/widgets-to-files/sdk/model";

export const api = factory<IRelation>({
  route,
  host,
  options,
});
