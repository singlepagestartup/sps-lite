import { createApi } from "@reduxjs/toolkit/query/react";
import { BACKEND_URL } from "~utils/envs";
import {
  strapiFetchBaseQueryBuilder,
  strapiFind,
  strapiFindOne,
} from "~redux/strapi-rtk";
import { populate } from "../populate";
import { IEntity } from "../interfaces";
import { transformResponseItem } from "~utils/api/transform-response-item";

const model = "orders-products";
const rtkType = "OrderProduct";

export const api = createApi({
  baseQuery: strapiFetchBaseQueryBuilder(`${BACKEND_URL}/api/sps-ecommerce`),
  tagTypes: [rtkType],
  reducerPath: model,
  endpoints: (build) => ({}),
});
