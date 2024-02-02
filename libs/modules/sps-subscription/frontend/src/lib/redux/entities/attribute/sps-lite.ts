import { createApi } from "@reduxjs/toolkit/query/react";
import { rtk, BACKEND_URL } from "@sps/utils";
import { populate } from "@sps/sps-subscription-contracts-extended/lib/models/attribute/populate";
import type { IEntity } from "@sps/sps-subscription-contracts-extended/lib/models/attribute/interfaces";

const extension = "sps-subscription/";
const model = "attributes";
const reducerPath = `${extension}${model}`;
const rtkType = "Attribute";

export const api = createApi({
  baseQuery: rtk.api.fetchBaseQueryBuilder(
    `${BACKEND_URL}/api/sps-subscription`,
  ),
  tagTypes: [rtkType],
  reducerPath,
  endpoints: (build) => ({
    get: rtk.api.find<IEntity>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),

    getById: rtk.api.findOne<IEntity>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),
  }),
});
