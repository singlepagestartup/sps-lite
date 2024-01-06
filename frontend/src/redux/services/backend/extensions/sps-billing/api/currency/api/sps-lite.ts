import { createApi } from "@reduxjs/toolkit/query/react";
import { api as modalApi } from "~redux/services/backend/extensions/sps-website-builder/api/modal/api";
import { BACKEND_URL } from "~utils/envs";
import { strapiFetchBaseQueryBuilder, strapiFind } from "~redux/strapi-rtk";
import { IEntity } from "../interfaces";
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
