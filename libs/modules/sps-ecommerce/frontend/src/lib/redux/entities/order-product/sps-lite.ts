import { createApi } from "@reduxjs/toolkit/query/react";
import { strapiFetchBaseQueryBuilder, BACKEND_URL } from "@sps/utils";
import { populate } from "@sps/sps-ecommerce-contracts/lib/entities/order-product/populate";
import type { IEntity } from "@sps/sps-ecommerce-contracts/lib/entities/order-product/interfaces";

const model = "orders-products";
const rtkType = "OrderProduct";

export const api = createApi({
  baseQuery: strapiFetchBaseQueryBuilder(`${BACKEND_URL}/api/sps-ecommerce`),
  tagTypes: [rtkType],
  reducerPath: model,
  endpoints: (build) => ({}),
});
