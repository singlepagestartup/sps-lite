import { createApi } from "@reduxjs/toolkit/query/react";
import { rtk, BACKEND_URL } from "@sps/utils";
import { populate } from "@sps/sps-crm-contracts-extended/lib/models/form-request/populate";
import type { IEntity } from "@sps/sps-crm-contracts-extended/lib/models/form-request/interfaces";

const model = "form-requests";
const rtkType = "FormRequest";

export const api = createApi({
  baseQuery: rtk.api.fetchBaseQueryBuilder(`${BACKEND_URL}/api/sps-crm`),
  tagTypes: [rtkType],
  reducerPath: model,
  endpoints: (build) => ({
    create: rtk.api.create<IEntity>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),
  }),
});
