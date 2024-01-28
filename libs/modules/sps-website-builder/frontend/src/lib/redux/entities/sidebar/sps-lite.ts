import { createApi } from "@reduxjs/toolkit/query/react";
import {
  strapiFetchBaseQueryBuilder,
  strapiFindOne,
  BACKEND_URL,
} from "@sps/utils";
import { populate } from "@sps/sps-website-builder-contracts/lib/entities/sidebar/populate";
import type { IEntity } from "@sps/sps-website-builder-contracts/lib/entities/sidebar/interfaces";

const model = "sidebars";
const rtkType = "Sidebar";

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
