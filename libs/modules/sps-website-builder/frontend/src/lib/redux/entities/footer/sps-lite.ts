import { createApi } from "@reduxjs/toolkit/query/react";
import {
  strapiFetchBaseQueryBuilder,
  strapiFindOne,
  BACKEND_URL,
} from "@sps/utils";
import { populate } from "@sps/sps-website-builder-contracts/lib/entities/footer/populate";
import type { IEntity } from "@sps/sps-website-builder-contracts/lib/entities/footer/interfaces";

const model = "footers";
const rtkType = "Footer";

export const api = createApi({
  baseQuery: strapiFetchBaseQueryBuilder(
    `${BACKEND_URL}/api/sps-website-builder`,
  ),
  tagTypes: [rtkType],
  reducerPath: model,
  endpoints: (build) => ({
    getFooterById: strapiFindOne<IEntity>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),
  }),
});
