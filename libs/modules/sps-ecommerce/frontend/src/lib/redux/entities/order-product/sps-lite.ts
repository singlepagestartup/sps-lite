import { createApi } from "@reduxjs/toolkit/query/react";
import { rtk, BACKEND_URL } from "@sps/utils";
import { populate } from "@sps/sps-ecommerce-contracts-extended/lib/entities/order-product/populate";
import type { IEntity } from "@sps/sps-ecommerce-contracts-extended/lib/entities/order-product/interfaces";

const model = "orders-products";
const rtkType = "OrderProduct";

export const api = createApi({
  baseQuery: rtk.api.fetchBaseQueryBuilder(`${BACKEND_URL}/api/sps-ecommerce`),
  tagTypes: [rtkType],
  reducerPath: model,
  endpoints: (build) => ({}),
});
