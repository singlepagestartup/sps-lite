import { createApi } from "@reduxjs/toolkit/query/react";
import { rtk } from "@sps/shared-frontend-utils-client";
import {
  route,
  IModelExtended,
  tag,
  populate,
  host,
} from "@sps/sps-website-builder/models/modal/frontend/api/model";

export const api = createApi({
  baseQuery: rtk.api.fetchBaseQueryBuilder(host),
  tagTypes: [tag],
  reducerPath: tag,
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
