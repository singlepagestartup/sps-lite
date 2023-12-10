import { createApi } from "@reduxjs/toolkit/query/react";
import { api as modalApi } from "~redux/services/backend/models/modal/api";
import { BACKEND_URL } from "~utils/envs";
import { strapiFetchBaseQueryBuilder, strapiFind } from "~redux/strapi-rtk";
import { IBackendCurrency } from "../interfaces";
import { populate } from "../populate";

const rtkType = "Currency";
const model = "currencies";

export const api = createApi({
  baseQuery: strapiFetchBaseQueryBuilder(BACKEND_URL),
  tagTypes: [rtkType],
  reducerPath: model,
  endpoints: (build) => ({
    getCurrencies: strapiFind<IBackendCurrency>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        await queryFulfilled;
        dispatch(modalApi.util.invalidateTags(["Modal"]));
      },
    }),
  }),
});
