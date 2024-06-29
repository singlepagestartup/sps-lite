import { createApi } from "@reduxjs/toolkit/query/react";
import { rtk } from "@sps/shared-frontend-utils-client";
import { BACKEND_URL, transformResponseItem } from "@sps/shared-utils";
import {
  route,
  IModelExtended,
  tag,
  populate,
} from "@sps/sps-website-builder/models/layout/frontend/api/model";

export const api = createApi({
  baseQuery: rtk.api.fetchBaseQueryBuilder(
    `${BACKEND_URL}/api/sps-website-builder`,
  ),
  tagTypes: [tag],
  reducerPath: route,
  endpoints: (build) => ({
    find: rtk.api.find<IModelExtended>({
      serviceApi: this,
      build,
      populate,
      model: route,
      rtkType: tag,
    }),

    findById: rtk.api.findById<IModelExtended>({
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

    getByPageUrl: build.query<IModelExtended, any>({
      query: (params: any = {}) => {
        const {
          url,
          populate: passedPopulate = populate,
          locale,
          filters,
          pagination,
        } = params;

        return {
          url: `${route}/by-page-url`,
          params: {
            url,
            populate: passedPopulate,
            locale,
            filters,
            pagination,
          },
        };
      },

      transformResponse: (result: { data: IModelExtended }) => {
        return transformResponseItem<IModelExtended>(result);
      },

      providesTags: (result: any) => {
        return result?.id
          ? [
              { type: tag, id: result.id },
              { type: tag, id: "LIST" },
            ]
          : [];
      },
    }),
  }),
});

export const subscription = (reduxStore: any) => {};
