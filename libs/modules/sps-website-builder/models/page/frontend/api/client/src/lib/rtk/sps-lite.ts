import { createApi } from "@reduxjs/toolkit/query/react";
import { rtk, BACKEND_URL } from "@sps/shared-frontend-utils-client";
import { populate, route, tag, IModelExtended } from "../model";
import { transformResponseItem } from "@sps/shared-utils";

export const api = createApi({
  baseQuery: rtk.api.fetchBaseQueryBuilder(
    `${BACKEND_URL}/api/sps-website-builder`,
  ),
  tagTypes: [tag],
  reducerPath: route,
  endpoints: (build) => ({
    findMany: rtk.api.find<IModelExtended>({
      serviceApi: this,
      build,
      populate,
      model: route,
      rtkType: tag,
    }),

    findOne: rtk.api.findOne<IModelExtended>({
      serviceApi: this,
      build,
      populate,
      model: route,
      rtkType: tag,
    }),

    getByUrl: build.query<IModelExtended, any>({
      query: (params: any = {}) => {
        const { populate, locale, filters, pagination, url } = params;

        return {
          url: `${route}/get-by-url`,
          params: {
            url,
            populate,
            locale,
            filters,
            pagination,
          },
        };
      },

      transformResponse: (result) => {
        return transformResponseItem(result);
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

    createPage: rtk.api.create<IModelExtended>({
      serviceApi: this,
      build,
      populate,
      model: route,
      rtkType: tag,
    }),

    updatePage: rtk.api.update<IModelExtended>({
      serviceApi: this,
      build,
      populate,
      model: route,
      rtkType: tag,
    }),

    deletePage: rtk.api.delete<IModelExtended>({
      serviceApi: this,
      build,
      populate,
      model: route,
      rtkType: tag,
    }),
  }),
});

export const subscription = (reduxStore: any) => {};
