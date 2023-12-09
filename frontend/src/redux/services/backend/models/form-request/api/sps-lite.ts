import { createApi } from "@reduxjs/toolkit/query/react";
import { BACKEND_URL } from "~utils/envs";
import {
  strapiCreate,
  strapiFetchBaseQueryBuilder,
} from "~utils/api/strapi-rtk";
import { IBackendFormRequest } from "../interfaces";
import { populate } from "../populate";

const model = "form-requests";
const rtkType = "FormRequest";

export const api = createApi({
  baseQuery: strapiFetchBaseQueryBuilder(BACKEND_URL),
  tagTypes: [rtkType],
  reducerPath: model,
  endpoints: (build) => ({
    create: strapiCreate<IBackendFormRequest>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),
  }),
});
