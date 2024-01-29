import { createApi } from "@reduxjs/toolkit/query/react";
import {
  strapiCreate,
  strapiFetchBaseQueryBuilder,
  strapiFind,
  strapiFindOne,
  BACKEND_URL,
  transformResponseItem,
} from "@sps/utils";
import { populate } from "@sps/sps-subscription-contracts-extended/lib/entities/subscription/populate";
import type { IEntity } from "@sps/sps-subscription-contracts-extended/lib/entities/subscription/interfaces";

const model = "subscriptions";
const rtkType = "Subscription";

export const api = createApi({
  baseQuery: strapiFetchBaseQueryBuilder(`${BACKEND_URL}/api/sps-subscription`),
  tagTypes: [rtkType],
  reducerPath: model,
  endpoints: (build) => ({
    create: strapiCreate<IEntity>({
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
