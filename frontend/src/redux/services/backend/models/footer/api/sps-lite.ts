import { createApi } from "@reduxjs/toolkit/query/react";
import { BACKEND_URL } from "~utils/envs";
import {
  strapiFetchBaseQueryBuilder,
  strapiFindOne,
} from "~utils/api/strapi-rtk";
import { IBackendFooter } from "../interfaces";
import { populate } from "../populate";

const model = "footers";
const rtkType = "Footer";

export const api = createApi({
  baseQuery: strapiFetchBaseQueryBuilder(BACKEND_URL),
  tagTypes: [rtkType],
  reducerPath: model,
  endpoints: (build) => ({
    getFooterById: strapiFindOne<IBackendFooter>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),
  }),
});
