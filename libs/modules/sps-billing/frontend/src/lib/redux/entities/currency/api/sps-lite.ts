import { createApi } from "@reduxjs/toolkit/query/react";
import { api as modalApi } from "@sps/sps-website-builder-frontend/lib/redux/entities/modal/api";
import {
  strapiFetchBaseQueryBuilder,
  strapiFind,
  BACKEND_URL,
} from "@sps/utils";
import type { IEntity } from "../interfaces";
import { populate } from "../populate";

const rtkType = "Currency";
const model = "currencies";

export const api = createApi({
  baseQuery: strapiFetchBaseQueryBuilder(`${BACKEND_URL}/api/sps-billing`),
  tagTypes: [rtkType],
  reducerPath: model,
  endpoints: (build) => ({
    get: strapiFind<IEntity>({
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
