import { createApi } from "@reduxjs/toolkit/query/react";
import {
  rtk,
  BACKEND_URL,
  transformResponseItem,
  prepareFormDataToSend,
} from "@sps/shared-frontend-utils-client";
import { IModelExtended, route, tag, populate } from "../model";
import { globalActionsStore } from "@sps/store";

export const api = createApi({
  baseQuery: rtk.api.fetchBaseQueryBuilder(`${BACKEND_URL}/api/sps-crm`),
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
    submit: build.mutation({
      query: (params = {}) => {
        const { id, populate = {} } = params;
        const formData = prepareFormDataToSend(params);

        return {
          url: `${route}/${id}/submit`,
          method: "POST",
          params: {
            populate,
          },
          body: formData,
        };
      },

      transformResponse: (result) => {
        return transformResponseItem(result) as IModelExtended;
      },

      // onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
      //   await queryFulfilled;
      //   dispatch(cartApi.util.invalidateTags(["Cart"]));
      // },
    }),
  }),
});

export const subscription = (reduxStore: any) => {};
