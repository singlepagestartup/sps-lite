import { createApi } from "@reduxjs/toolkit/query/react";
import { rtk, BACKEND_URL, transformResponseItem } from "@sps/utils";
import { IModelExtended, route, tag, populate } from "../../_model";

export const api = createApi({
  baseQuery: rtk.api.fetchBaseQueryBuilder(`${BACKEND_URL}/api/sps-ecommerce`),
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
    find: rtk.api.find<IModelExtended>({
      serviceApi: this,
      build,
      populate,
      model: route,
      rtkType: tag,
    }),
    singleStepCheckout: build.mutation({
      query: (params = {}) => {
        const { data, id, populate = {} } = params;

        return {
          url: `${route}/${id}/single-step-checkout`,
          method: "POST",
          params: {
            populate,
          },
          body: { data },
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

    incrementInCart: build.mutation({
      query: (params = {}) => {
        const { data, id, populate = {} } = params;

        return {
          url: `${route}/${id}/increment-in-cart`,
          method: "POST",
          params: {
            populate,
          },
          body: { data },
        };
      },

      transformResponse: (result) => {
        return transformResponseItem(result) as IModelExtended;
      },

      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        await queryFulfilled;
        // dispatch(userApi.util.invalidateTags(["User"]));
        // dispatch(cartApi.util.invalidateTags(["Cart"]));
        // dispatch(orderApi.util.invalidateTags(["Order"]));
      },
    }),

    decrementInCart: build.mutation({
      query: (params = {}) => {
        const { data, id, populate = {} } = params;

        return {
          url: `${route}/${id}/decrement-in-cart`,
          method: "POST",
          params: {
            populate,
          },
          body: { data },
        };
      },

      transformResponse: (result) => {
        return transformResponseItem(result) as IModelExtended;
      },

      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        await queryFulfilled;
        // dispatch(userApi.util.invalidateTags(["User"]));
        // dispatch(cartApi.util.invalidateTags(["Cart"]));
        // dispatch(orderApi.util.invalidateTags(["Order"]));
      },
    }),

    removeFromCart: build.mutation({
      query: (params = {}) => {
        const { data, id, populate = {} } = params;

        return {
          url: `${route}/${id}/remove-from-cart`,
          method: "POST",
          params: {
            populate,
          },
          body: { data },
        };
      },

      transformResponse: (result) => {
        return transformResponseItem(result) as IModelExtended;
      },

      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        await queryFulfilled;
        // dispatch(userApi.util.invalidateTags(["User"]));
        // dispatch(cartApi.util.invalidateTags(["Cart"]));
        // dispatch(orderApi.util.invalidateTags(["Order"]));
      },
    }),
  }),
});
