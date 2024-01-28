import { createApi } from "@reduxjs/toolkit/query/react";
import { strapiFetchBaseQueryBuilder, BACKEND_URL } from "@sps/utils";

const model = "sliders";
const rtkType = "Slider";

export const api = createApi({
  baseQuery: strapiFetchBaseQueryBuilder(
    `${BACKEND_URL}/api/sps-website-builder`,
  ),
  tagTypes: [rtkType],
  reducerPath: model,
  endpoints: (build) => ({}),
});
