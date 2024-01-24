import { createApi } from "@reduxjs/toolkit/query/react";
import {
  strapiFetchBaseQueryBuilder,
  strapiFindOne,
  BACKEND_URL,
} from "@sps/utils";
import { populate } from "../populate";
import type { IEntity } from "../interfaces";

const model = "topbars";
const rtkType = "Topbar";

export const api = createApi({
  baseQuery: strapiFetchBaseQueryBuilder(
    `${BACKEND_URL}/api/sps-website-builder`,
  ),
  tagTypes: [rtkType],
  reducerPath: model,
  endpoints: (build) => ({
    getById: strapiFindOne<IEntity>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),
  }),
});
