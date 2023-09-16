import { serviceApi } from "../..";
import { strapiCreate } from "~utils/api/strapi-rtk";

const model = "form-requests";
const rtkType = "FormRequest";
const populate = {};

export const reviewsApi = serviceApi.injectEndpoints({
  endpoints: (build) => ({
    createFormRequest: strapiCreate<any>({
      serviceApi,
      build,
      populate,
      model,
      rtkType,
    }),
  }),
});

export const { useCreateFormRequestMutation } = reviewsApi;
