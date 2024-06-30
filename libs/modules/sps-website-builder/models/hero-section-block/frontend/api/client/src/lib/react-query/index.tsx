"use client";

import {
  IModelExtended,
  route,
  host,
} from "@sps/sps-website-builder/models/hero-section-block/frontend/api/model";
import { factory } from "@sps/shared-frontend-client-api";
export { Provider } from "@sps/shared-frontend-client-api";

export const api = factory<IModelExtended>({
  route,
  host,
});
