import { factory } from "@sps/shared-frontend-server-api";
import {
  route,
  IRelationExtended,
  host,
  options,
} from "@sps/sps-website-builder/relations/widgets-to-slider-blocks/frontend/api/model";

export const api = factory<IRelationExtended>({
  route,
  host,
  options,
});
