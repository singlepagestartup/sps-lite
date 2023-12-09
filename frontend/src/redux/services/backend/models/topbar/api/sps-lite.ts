import { createApi } from "@reduxjs/toolkit/query/react";
import { BACKEND_URL } from "~utils/envs";
import {
  strapiFetchBaseQueryBuilder,
  strapiFindOne,
} from "~utils/api/strapi-rtk";
import { IBackendTopbar } from "../interfaces";
import { populate } from "../populate";

const model = "topbars";
const rtkType = "Topbar";

export const api = createApi({
  baseQuery: strapiFetchBaseQueryBuilder(BACKEND_URL),
  tagTypes: [rtkType],
  reducerPath: model,
  endpoints: (build) => ({
    getById: strapiFindOne<IBackendTopbar>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),
  }),
});
