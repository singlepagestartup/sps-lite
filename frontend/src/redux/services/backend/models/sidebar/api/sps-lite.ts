import { createApi } from "@reduxjs/toolkit/query/react";
import { BACKEND_URL } from "~utils/envs";
import {
  strapiFetchBaseQueryBuilder,
  strapiFindOne,
} from "~utils/api/strapi-rtk";
import { IBackendSidebar } from "../interfaces";
import { populate } from "../populate";

const model = "sidebars";
const rtkType = "Sidebar";

export const api = createApi({
  baseQuery: strapiFetchBaseQueryBuilder(BACKEND_URL),
  tagTypes: [rtkType],
  reducerPath: model,
  endpoints: (build) => ({
    getById: strapiFindOne<IBackendSidebar>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),
  }),
});
