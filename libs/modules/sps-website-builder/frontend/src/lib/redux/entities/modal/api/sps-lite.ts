import { createApi } from "@reduxjs/toolkit/query/react";
import {
  strapiFetchBaseQueryBuilder,
  strapiFind,
  BACKEND_URL,
} from "@sps/utils";
import { populate } from "../populate";
import type { IEntity } from "../interfaces";

const model = "modals";
const rtkType = "Modal";

export const api = createApi({
  baseQuery: strapiFetchBaseQueryBuilder(
    `${BACKEND_URL}/api/sps-website-builder`,
  ),
  tagTypes: [rtkType],
  reducerPath: model,
  endpoints: (build) => ({
    get: strapiFind<IEntity>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),
  }),
});
