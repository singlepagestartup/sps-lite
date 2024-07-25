import { factory } from "@sps/shared-frontend-server-api";
import {
  route,
  IRelation,
  host,
  options,
} from "@sps/sps-website-builder/relations/widgets-to-features-section-blocks/sdk/model";

export const api = factory<IRelation>({
  route,
  host,
  options,
});
