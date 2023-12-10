import { createApi } from "@reduxjs/toolkit/query/react";
import { BACKEND_URL } from "~utils/envs";
import { strapiFetchBaseQueryBuilder, strapiFindOne } from "~redux/strapi-rtk";
import { populate } from "../populate";
import { IBackendApiNavbar } from "../interfaces";

const model = "navbars";
const rtkType = "Navbar";

export const api = createApi({
  baseQuery: strapiFetchBaseQueryBuilder(BACKEND_URL),
  tagTypes: [rtkType],
  reducerPath: model,
  endpoints: (build) => ({
    getById: strapiFindOne<IBackendApiNavbar>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),
  }),
});
