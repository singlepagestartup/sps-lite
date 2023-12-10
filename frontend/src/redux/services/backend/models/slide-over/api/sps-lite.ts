import { createApi } from "@reduxjs/toolkit/query/react";
import { BACKEND_URL } from "~utils/envs";
import { strapiFetchBaseQueryBuilder, strapiFind } from "~redux/strapi-rtk";
import { IBackendSlideOver } from "../interfaces";
import { populate } from "../populate";

const model = "slide-overs";
const rtkType = "SlideOver";

export const api = createApi({
  baseQuery: strapiFetchBaseQueryBuilder(BACKEND_URL),
  tagTypes: [rtkType],
  reducerPath: model,
  endpoints: (build) => ({
    get: strapiFind<IBackendSlideOver>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),
  }),
});
