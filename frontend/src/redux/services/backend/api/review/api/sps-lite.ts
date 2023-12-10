import { createApi } from "@reduxjs/toolkit/query/react";
import { BACKEND_URL } from "~utils/envs";
import { strapiFetchBaseQueryBuilder, strapiFind } from "~redux/strapi-rtk";
import { populate } from "../populate";
import { IBackendApiReview } from "../interfaces";

const model = "reviews";
const rtkType = "Review";

export const api = createApi({
  baseQuery: strapiFetchBaseQueryBuilder(BACKEND_URL),
  tagTypes: [rtkType],
  reducerPath: model,
  endpoints: (build) => ({
    get: strapiFind<IBackendApiReview>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),
  }),
});
