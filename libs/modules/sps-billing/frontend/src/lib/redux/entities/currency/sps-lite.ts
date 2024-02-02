import { createApi } from "@reduxjs/toolkit/query/react";
// import { api as modalApi } from "@sps/sps-website-builder-frontend/lib/redux/entities/modal/api";
import { rtk, BACKEND_URL } from "@sps/utils";
import type { IEntity } from "@sps/sps-billing-contracts-extended/lib/models/currency/interfaces";
import { populate } from "@sps/sps-billing-contracts-extended/lib/models/currency/populate";

const rtkType = "Currency";
const model = "currencies";

export const api = createApi({
  baseQuery: rtk.api.fetchBaseQueryBuilder(`${BACKEND_URL}/api/sps-billing`),
  tagTypes: [rtkType],
  reducerPath: model,
  endpoints: (build) => ({
    get: rtk.api.find<IEntity>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        // await queryFulfilled;
        // dispatch(modalApi.util.invalidateTags(["Modal"]));
      },
    }),
  }),
});
