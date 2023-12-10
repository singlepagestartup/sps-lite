import { createApi } from "@reduxjs/toolkit/query/react";
import { BACKEND_URL } from "~utils/envs";
import { strapiFetchBaseQueryBuilder, strapiFind } from "~redux/strapi-rtk";
import { populate } from "../populate";
import { IBackendApiModal } from "../interfaces";

const model = "modals";
const rtkType = "Modal";

export const api = createApi({
  baseQuery: strapiFetchBaseQueryBuilder(BACKEND_URL),
  tagTypes: [rtkType],
  reducerPath: model,
  endpoints: (build) => ({
    get: strapiFind<IBackendApiModal>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),
  }),
});
