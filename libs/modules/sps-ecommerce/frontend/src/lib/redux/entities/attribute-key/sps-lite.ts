import { createApi } from "@reduxjs/toolkit/query/react";
import {
  strapiFetchBaseQueryBuilder,
  strapiFind,
  strapiFindOne,
  BACKEND_URL,
} from "@sps/utils";
import { populate } from "@sps/sps-ecommerce-contracts-extended/lib/entities/attribute-key/populate";
import type { IEntity } from "@sps/sps-ecommerce-contracts-extended/lib/entities/attribute-key/interfaces";

const extension = "sps-ecommerce/";
const model = "attribute-keys";
const reducerPath = `${extension}${model}`;
const rtkType = "AttributeKey";

export const api = createApi({
  baseQuery: strapiFetchBaseQueryBuilder(`${BACKEND_URL}/api/sps-ecommerce`),
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
