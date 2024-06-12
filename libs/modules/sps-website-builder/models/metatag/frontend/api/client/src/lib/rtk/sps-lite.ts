import { createApi } from "@reduxjs/toolkit/query/react";
import { rtk } from "@sps/shared-frontend-utils-client";
import { BACKEND_URL } from "@sps/shared-utils";
import { route, tag } from "../model";

export const api = createApi({
  baseQuery: rtk.api.fetchBaseQueryBuilder(
    `${BACKEND_URL}/api/sps-website-builder`,
  ),
  tagTypes: [tag],
  reducerPath: route,
  endpoints: (build) => ({}),
});

export const subscription = (reduxStore: any) => {};
