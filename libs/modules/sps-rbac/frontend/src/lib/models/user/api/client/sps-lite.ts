import { createApi } from "@reduxjs/toolkit/query/react";
import { rtk, BACKEND_URL, transformResponseItem } from "@sps/utils";
import { IModelExtended, route, tag, populate } from "../../model";

export const api = createApi({
  baseQuery: rtk.api.fetchBaseQueryBuilder(`${BACKEND_URL}/api`),
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
    getMe: build.query({
      query: () => {
        return {
          url: "users/me",
        };
      },

      transformResponse: (item) => {
        return transformResponseItem(item) as IModelExtended;
      },

      providesTags: (result) =>
        result ? [{ type: "User", id: result.id }] : [],
    }),
  }),
});
