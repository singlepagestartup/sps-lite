import { createApi } from "@reduxjs/toolkit/query/react";
import { rtk } from "@sps/shared-frontend-utils-client";
import { BACKEND_URL } from "@sps/shared-utils";
import {
  route,
  IModelExtended,
  tag,
  populate,
} from "@sps/sps-website-builder/models/modal/frontend/api/model";

export const api = createApi({
  baseQuery: rtk.api.fetchBaseQueryBuilder(
    `${BACKEND_URL}/api/sps-website-builder`,
  ),
  tagTypes: [tag],
  reducerPath: route,
  endpoints: (build) => ({
    findOne: rtk.api.findOne<IModelExtended>({
      serviceApi: this,
      build,
      populate,
      model: route,
      rtkType: tag,
    }),
    findMany: rtk.api.find<IModelExtended>({
      serviceApi: this,
      build,
      populate,
      model: route,
      rtkType: tag,
    }),
  }),
});

export const subscription = (reduxStore: any) => {};
