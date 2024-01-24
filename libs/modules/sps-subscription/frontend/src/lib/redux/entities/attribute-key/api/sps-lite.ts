import { createApi } from "@reduxjs/toolkit/query/react";
import {
  strapiFetchBaseQueryBuilder,
  strapiFind,
  strapiFindOne,
  BACKEND_URL,
} from "@sps/utils";
import { populate } from "../populate";
import type { IEntity } from "../interfaces";

const extension = "sps-subscription/";
const model = "attribute-keys";
const reducerPath = `${extension}${model}`;
const rtkType = "AttributeKey";

export const api = createApi({
  baseQuery: strapiFetchBaseQueryBuilder(`${BACKEND_URL}/api/sps-subscription`),
  tagTypes: [rtkType],
  reducerPath,
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
  }),
});
