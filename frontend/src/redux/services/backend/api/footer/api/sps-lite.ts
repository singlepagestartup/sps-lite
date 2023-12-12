import { createApi } from "@reduxjs/toolkit/query/react";
import { BACKEND_URL } from "~utils/envs";
import { strapiFetchBaseQueryBuilder, strapiFindOne } from "~redux/strapi-rtk";
import { populate } from "../populate";
import { IBackendApiEntity } from "../interfaces";

const model = "footers";
const rtkType = "Footer";

export const api = createApi({
  baseQuery: strapiFetchBaseQueryBuilder(BACKEND_URL),
  tagTypes: [rtkType],
  reducerPath: model,
  endpoints: (build) => ({
    getFooterById: strapiFindOne<IBackendApiEntity>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),
  }),
});
