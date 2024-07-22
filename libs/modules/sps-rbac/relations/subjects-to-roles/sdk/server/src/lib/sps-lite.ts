import { factory } from "@sps/shared-frontend-server-api";
import {
  route,
  IRelation,
  host,
  options,
} from "@sps/sps-rbac/relations/subjects-to-roles/sdk/model";

export const api = factory<IRelation>({
  route,
  host,
  options,
});
