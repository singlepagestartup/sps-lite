import { createApi } from "@reduxjs/toolkit/query/react";
import {
  strapiCreate,
  strapiFetchBaseQueryBuilder,
  strapiFind,
  strapiFindOne,
  BACKEND_URL,
} from "@sps/utils";
import type { IEntity } from "@sps/sps-billing-contracts/lib/entities/invoice/interfaces";
import { populate } from "@sps/sps-billing-contracts/lib/entities/invoice/populate";

const rtkType = "Invoice";
const model = "invoices";

export const api = createApi({
  baseQuery: strapiFetchBaseQueryBuilder(`${BACKEND_URL}/api/sps-billing`),
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

    getById: strapiFindOne<IEntity>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),

    create: strapiCreate<IEntity>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),
  }),
});
