import { factory } from "@sps/shared-frontend-server-api";
import {
  route,
  IRelation,
  host,
  options,
} from "@sps/sps-website-builder/relations/sliders-to-slides/sdk/model";

export const api = factory<IRelation>({
  route,
  host,
  options,
});
