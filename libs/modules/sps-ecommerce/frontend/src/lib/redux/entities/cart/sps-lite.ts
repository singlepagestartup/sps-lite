import { createApi } from "@reduxjs/toolkit/query/react";
import { rtk, transformResponseItem, BACKEND_URL } from "@sps/utils";
import { populate } from "@sps/sps-ecommerce-contracts-extended/lib/entities/cart/populate";
import type { IEntity } from "@sps/sps-ecommerce-contracts-extended/lib/entities/cart/interfaces";

const model = "carts";
const rtkType = "Cart";

export const api = createApi({
  baseQuery: rtk.api.fetchBaseQueryBuilder(`${BACKEND_URL}/api/sps-ecommerce`),
  tagTypes: [rtkType],
  reducerPath: model,
  endpoints: (build) => ({
    getById: rtk.api.findOne<IEntity>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),

    checkout: build.mutation({
      query: (params = {}) => {
        const { data, id, populate = {} } = params;

        return {
          url: `${model}/${id}/checkout`,
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
  }),
});
