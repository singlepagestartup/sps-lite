import { createApi } from "@reduxjs/toolkit/query/react";
import { BACKEND_URL } from "~utils/envs";
import {
  strapiFetchBaseQueryBuilder,
  strapiFind,
  strapiFindOne,
} from "~redux/strapi-rtk";
import { populate } from "../populate";
import { IEntity } from "../interfaces";
import { transformResponseItem } from "~utils/api/transform-response-item";
import { api as userApi } from "~redux/services/backend/extensions/users-permissions/api/user/api";
import { api as cartApi } from "~redux/services/backend/extensions/sps-ecommerce/api/cart/api";
import { api as orderApi } from "~redux/services/backend/extensions/sps-ecommerce/api/order/api";

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
