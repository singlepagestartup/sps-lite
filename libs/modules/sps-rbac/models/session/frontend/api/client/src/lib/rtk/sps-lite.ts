import { createApi } from "@reduxjs/toolkit/query/react";
import { rtk } from "@sps/shared-frontend-utils-client";
import { transformResponseItem } from "@sps/shared-utils";
import {
  IModelExtended,
  route,
  tag,
  populate,
  host,
} from "@sps/sps-rbac/models/session/frontend/api/model";

export const api = createApi({
  baseQuery: rtk.api.fetchBaseQueryBuilder(host),
  tagTypes: [tag],
  reducerPath: tag,
  endpoints: (build) => ({
    findById: rtk.api.findById<IModelExtended>({
      serviceApi: this,
      build,
      populate,
      model: route,
      rtkType: tag,
    }),
    find: rtk.api.find<IModelExtended>({
      serviceApi: this,
      build,
      populate,
      model: route,
      rtkType: tag,
    }),
    create: rtk.api.create<IModelExtended>({
      serviceApi: this,
      build,
      populate,
      model: route,
      rtkType: tag,
    }),
    update: rtk.api.update<IModelExtended>({
      serviceApi: this,
      build,
      populate,
      model: route,
      rtkType: tag,
    }),
    delete: rtk.api.delete<IModelExtended>({
      serviceApi: this,
      build,
      populate,
      model: route,
      rtkType: tag,
    }),
    init: build.query<{ ok: true }, any>({
      query: () => {
        return {
          url: `${route}/init`,
        };
      },

      transformResponse: (result: { data: { ok: true } }) => {
        return transformResponseItem<{ ok: true }>(result);
      },
    }),
  }),
});

export const subscription = (reduxStore: any) => {};
