import { createApi } from "@reduxjs/toolkit/query/react";
import { BACKEND_URL } from "~utils/envs";
import {
  strapiCreate,
  strapiFetchBaseQueryBuilder,
  strapiFind,
  strapiFindOne,
} from "~redux/strapi-rtk";
import { populate } from "../populate";
import { IEntity } from "../interfaces";

const model = "subscriptions";
const rtkType = "Subscription";

export const api = createApi({
  baseQuery: strapiFetchBaseQueryBuilder(`${BACKEND_URL}/api/sps-subscription`),
  tagTypes: [rtkType],
  reducerPath: model,
  endpoints: (build) => ({
    create: strapiCreate<IEntity>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),
  }),
});
