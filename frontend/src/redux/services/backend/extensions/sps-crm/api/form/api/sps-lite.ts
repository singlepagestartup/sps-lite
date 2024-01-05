import { createApi } from "@reduxjs/toolkit/query/react";
import { BACKEND_URL } from "~utils/envs";
import { strapiFetchBaseQueryBuilder } from "~redux/strapi-rtk";

const model = "forms";
const rtkType = "Form";

export const api = createApi({
  baseQuery: strapiFetchBaseQueryBuilder(`${BACKEND_URL}/api/sps-crm`),
  tagTypes: [rtkType],
  reducerPath: model,
  endpoints: (build) => ({}),
});
