import { createApi } from "@reduxjs/toolkit/query/react";
import { BACKEND_URL } from "~utils/envs";
import { strapiCreate, strapiFetchBaseQueryBuilder } from "~redux/strapi-rtk";
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
