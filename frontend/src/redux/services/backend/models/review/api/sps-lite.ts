import { createApi } from "@reduxjs/toolkit/query/react";
import { BACKEND_URL } from "~utils/envs";
import { strapiFetchBaseQueryBuilder, strapiFind } from "~redux/strapi-rtk";
import { IBackendReview } from "../interfaces";
import { populate } from "../populate";

const model = "reviews";
const rtkType = "Review";

export const api = createApi({
  baseQuery: strapiFetchBaseQueryBuilder(BACKEND_URL),
  tagTypes: [rtkType],
  reducerPath: model,
  endpoints: (build) => ({
    get: strapiFind<IBackendReview>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),
  }),
});
