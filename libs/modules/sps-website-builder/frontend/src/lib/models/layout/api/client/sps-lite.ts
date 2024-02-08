import { createApi } from "@reduxjs/toolkit/query/react";
import { transformResponseItem, rtk, BACKEND_URL } from "@sps/utils";
import { populate, route, tag, IModelExtended } from "../../model";

export const api = createApi({
  baseQuery: rtk.api.fetchBaseQueryBuilder(
    `${BACKEND_URL}/api/sps-website-builder`,
  ),
  tagTypes: [tag],
  reducerPath: route,
  endpoints: (build) => ({
    get: rtk.api.find<IModelExtended>({
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
  }),
});
