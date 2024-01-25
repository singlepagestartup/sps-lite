import { createApi } from "@reduxjs/toolkit/query/react";
import {
  strapiFetchBaseQueryBuilder,
  strapiFind,
  strapiFindOne,
  transformResponseItem,
  BACKEND_URL,
} from "@sps/utils";
import { populate } from "../populate";
import type { IEntity } from "../interfaces";
import { api as userApi } from "@sps/sps-rbac-frontend/lib/redux/entities/user/api";
import { api as cartApi } from "../../cart/api";
import { api as orderApi } from "../../order/api";

const model = "products";
const rtkType = "Product";

export const api = createApi({
  baseQuery: strapiFetchBaseQueryBuilder(`${BACKEND_URL}/api/sps-ecommerce`),
  tagTypes: [rtkType],
  reducerPath: model,
  endpoints: (build) => ({
    get: strapiFind<IEntity>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),

    getById: strapiFindOne<IEntity>({
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
