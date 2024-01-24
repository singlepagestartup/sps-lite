import { createApi } from "@reduxjs/toolkit/query/react";
import { strapiFetchBaseQueryBuilder, BACKEND_URL } from "@sps/utils";

const model = "locales";
const rtkType = "Locale";

export const api = createApi({
  baseQuery: strapiFetchBaseQueryBuilder(`${BACKEND_URL}/api`),
  tagTypes: [rtkType],
  reducerPath: model,
  endpoints: (build) => ({}),
});
