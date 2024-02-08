import { createApi } from "@reduxjs/toolkit/query/react";
import { rtk, BACKEND_URL, transformResponseItem } from "@sps/utils";
import { IModelExtended, route, tag, populate } from "../../model";

export const api = createApi({
  baseQuery: rtk.api.fetchBaseQueryBuilder(
    `${BACKEND_URL}/api/sps-subscription`,
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
    create: rtk.api.create<IModelExtended>({
      serviceApi: this,
      build,
      populate,
      model: route,
      rtkType: tag,
    }),
    updateByEmail: build.mutation({
      query: (params = {}) => {
        const { data, populate = {} } = params;

        return {
          url: `${route}/update-by-email`,
          method: "PUT",
          params: {
            populate,
          },
          body: { data },
        };
      },

      transformResponse: (result) => {
        return transformResponseItem(result) as IModelExtended;
      },
    }),
  }),
});
