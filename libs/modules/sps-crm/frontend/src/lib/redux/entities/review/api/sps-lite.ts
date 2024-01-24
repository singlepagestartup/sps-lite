import { createApi } from "@reduxjs/toolkit/query/react";
import {
  strapiFetchBaseQueryBuilder,
  strapiFind,
  BACKEND_URL,
} from "@sps/utils";
import { populate } from "../populate";
import { IEntity } from "../interfaces";

const model = "reviews";
const rtkType = "Review";

export const api = createApi({
  baseQuery: strapiFetchBaseQueryBuilder(`${BACKEND_URL}/api/sps-crm`),
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
