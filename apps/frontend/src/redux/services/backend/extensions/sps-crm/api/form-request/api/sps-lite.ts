import { createApi } from "@reduxjs/toolkit/query/react";
import {
  strapiCreate,
  strapiFetchBaseQueryBuilder,
  BACKEND_URL,
} from "@sps/utils";
import { populate } from "../populate";
import { IEntity } from "../interfaces";

const model = "form-requests";
const rtkType = "FormRequest";

export const api = createApi({
  baseQuery: strapiFetchBaseQueryBuilder(`${BACKEND_URL}/api/sps-crm`),
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
