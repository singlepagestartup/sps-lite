import { createApi } from "@reduxjs/toolkit/query/react";
import { BACKEND_URL } from "~utils/envs";
import { strapiFetchBaseQueryBuilder, strapiFind } from "~utils/api/strapi-rtk";
import { IBackendLoader } from "../interfaces";
import { populate } from "../populate";

const model = "loader";
const rtkType = "Loader";

export const api = createApi({
  baseQuery: strapiFetchBaseQueryBuilder(BACKEND_URL),
  tagTypes: [rtkType],
  reducerPath: model,
  endpoints: (build) => ({
    get: strapiFind<IBackendLoader>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),
  }),
});
