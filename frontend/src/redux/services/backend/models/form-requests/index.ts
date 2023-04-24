import { backendServiceApi } from "../..";
import { transformResponseItem } from "~utils/api/transform-response-item";
import { prepareFormDataToSend } from "~utils/api/preapare-form-data-to-send";

const model = "form-requests";

export const reviewsApi = backendServiceApi.injectEndpoints({
  endpoints: (build) => ({
    createFormRequest: build.mutation({
      query: (params = {}) => {
        const { populate = {} } = params;
        const formData = prepareFormDataToSend(params);

        return {
          url: `${model}`,
          method: "POST",
          params: {
            populate,
          },
          body: formData,
        };
      },

      transformResponse: (result) => {
        return transformResponseItem(result);
      },
    }),
  }),
});

export const { useCreateFormRequestMutation } = reviewsApi;
