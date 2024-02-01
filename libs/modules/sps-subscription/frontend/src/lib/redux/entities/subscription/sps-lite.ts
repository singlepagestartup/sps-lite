import { createApi } from "@reduxjs/toolkit/query/react";
import { rtk, BACKEND_URL, transformResponseItem } from "@sps/utils";
import { populate } from "@sps/sps-subscription-contracts-extended/lib/entities/subscription/populate";
import type { IEntity } from "@sps/sps-subscription-contracts-extended/lib/entities/subscription/interfaces";

const model = "subscriptions";
const rtkType = "Subscription";

export const api = createApi({
  baseQuery: rtk.api.fetchBaseQueryBuilder(
    `${BACKEND_URL}/api/sps-subscription`,
  ),
  tagTypes: [rtkType],
  reducerPath: model,
  endpoints: (build) => ({
    create: rtk.api.create<IEntity>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),

    updateByEmail: build.mutation({
      query: (params = {}) => {
        const { data, populate = {} } = params;

        return {
          url: `${model}/update-by-email`,
          method: "PUT",
          params: {
            populate,
          },
          body: { data },
        };
      },

      transformResponse: (result) => {
        return transformResponseItem(result) as IEntity;
      },
    }),
  }),
});
