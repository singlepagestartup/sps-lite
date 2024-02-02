import { createApi } from "@reduxjs/toolkit/query/react";
import { rtk, transformResponseItem, BACKEND_URL } from "@sps/utils";
import { populate } from "@sps/sps-ecommerce-contracts-extended/lib/models/product/populate";
import type { IEntity } from "@sps/sps-ecommerce-contracts-extended/lib/models/product/interfaces";
import { api as userApi } from "@sps/sps-rbac-frontend/lib/redux/entities/user";
import { api as cartApi } from "../cart";
import { api as orderApi } from "../order";

const model = "products";
const rtkType = "Product";

export const api = createApi({
  baseQuery: rtk.api.fetchBaseQueryBuilder(`${BACKEND_URL}/api/sps-ecommerce`),
  tagTypes: [rtkType],
  reducerPath: model,
  endpoints: (build) => ({
    get: rtk.api.find<IEntity>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),

    getById: rtk.api.findOne<IEntity>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),

    singleStepCheckout: build.mutation({
      query: (params = {}) => {
        const { data, id, populate = {} } = params;

        return {
          url: `${model}/${id}/single-step-checkout`,
          method: "POST",
          params: {
            populate,
          },
          body: { data },
        };
      },

      transformResponse: (result) => {
        return transformResponseItem(result) as IEntity;
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
          url: `${model}/${id}/increment-in-cart`,
          method: "POST",
          params: {
            populate,
          },
          body: { data },
        };
      },

      transformResponse: (result) => {
        return transformResponseItem(result) as IEntity;
      },

      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        await queryFulfilled;
        dispatch(userApi.util.invalidateTags(["User"]));
        dispatch(cartApi.util.invalidateTags(["Cart"]));
        dispatch(orderApi.util.invalidateTags(["Order"]));
      },
    }),

    decrementInCart: build.mutation({
      query: (params = {}) => {
        const { data, id, populate = {} } = params;

        return {
          url: `${model}/${id}/decrement-in-cart`,
          method: "POST",
          params: {
            populate,
          },
          body: { data },
        };
      },

      transformResponse: (result) => {
        return transformResponseItem(result) as IEntity;
      },

      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        await queryFulfilled;
        dispatch(userApi.util.invalidateTags(["User"]));
        dispatch(cartApi.util.invalidateTags(["Cart"]));
        dispatch(orderApi.util.invalidateTags(["Order"]));
      },
    }),

    removeFromCart: build.mutation({
      query: (params = {}) => {
        const { data, id, populate = {} } = params;

        return {
          url: `${model}/${id}/remove-from-cart`,
          method: "POST",
          params: {
            populate,
          },
          body: { data },
        };
      },

      transformResponse: (result) => {
        return transformResponseItem(result) as IEntity;
      },

      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        await queryFulfilled;
        dispatch(userApi.util.invalidateTags(["User"]));
        dispatch(cartApi.util.invalidateTags(["Cart"]));
        dispatch(orderApi.util.invalidateTags(["Order"]));
      },
    }),
  }),
});
