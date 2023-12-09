import { createApi } from "@reduxjs/toolkit/query/react";
import { BACKEND_URL } from "~utils/envs";
import {
  strapiFetchBaseQueryBuilder,
  strapiFindOne,
} from "~utils/api/strapi-rtk";
import { IBackendNavbar } from "../interfaces";
import { populate } from "../populate";

const model = "navbars";
const rtkType = "Navbar";

export const api = createApi({
  baseQuery: strapiFetchBaseQueryBuilder(BACKEND_URL),
  tagTypes: [rtkType],
  reducerPath: model,
  endpoints: (build) => ({
    getById: strapiFindOne<IBackendNavbar>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),
  }),
});
