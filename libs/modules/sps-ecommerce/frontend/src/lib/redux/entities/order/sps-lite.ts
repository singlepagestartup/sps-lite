import { createApi } from "@reduxjs/toolkit/query/react";
import { rtk, BACKEND_URL } from "@sps/utils";
import { populate } from "@sps/sps-ecommerce-contracts-extended/lib/models/order/populate";
import type { IEntity } from "@sps/sps-ecommerce-contracts-extended/lib/models/order/interfaces";

const model = "orders";
const rtkType = "Order";

export const api = createApi({
  baseQuery: rtk.api.fetchBaseQueryBuilder(`${BACKEND_URL}/api/sps-ecommerce`),
  tagTypes: [rtkType],
  reducerPath: model,
  endpoints: (build) => ({
    getById: rtk.api.findOne<IEntity>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),
  }),
});
