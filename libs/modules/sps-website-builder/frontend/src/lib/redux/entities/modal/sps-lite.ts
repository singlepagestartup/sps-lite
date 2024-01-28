import { createApi } from "@reduxjs/toolkit/query/react";
import {
  strapiFetchBaseQueryBuilder,
  strapiFind,
  BACKEND_URL,
} from "@sps/utils";
import { populate } from "@sps/sps-website-builder-contracts/lib/entities/modal/populate";
import type { IEntity } from "@sps/sps-website-builder-contracts/lib/entities/modal/interfaces";

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
