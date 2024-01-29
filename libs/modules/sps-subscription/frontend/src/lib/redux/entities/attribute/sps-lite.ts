import { createApi } from "@reduxjs/toolkit/query/react";
import {
  strapiFetchBaseQueryBuilder,
  strapiFind,
  strapiFindOne,
  BACKEND_URL,
} from "@sps/utils";
import { populate } from "@sps/sps-subscription-contracts-extended/lib/entities/attribute/populate";
import type { IEntity } from "@sps/sps-subscription-contracts-extended/lib/entities/attribute/interfaces";

const extension = "sps-subscription/";
const model = "attributes";
const reducerPath = `${extension}${model}`;
const rtkType = "Attribute";

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
