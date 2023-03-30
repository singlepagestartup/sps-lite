import { backendServiceApi } from "../..";
import utils from "@rogwild/next-utils";
const { prepareFormDataToSend } = utils.api;

const model = `form-requests`;

export const reviewsApi = backendServiceApi.injectEndpoints({
  endpoints: (build) => ({
    createFormRequest: build.mutation({
      query: (params = {}) => {
        const { populate = {} } = params;
        const formData = prepareFormDataToSend(params);

        return {
          url: `${model}`,
          method: `POST`,
          params: {
            populate,
          },
          body: formData,
        };
      },

      transformResponse: (result) => {
        return utils.api.transformResponseItem(result);
      },
    }),
  }),
});

export const { useCreateFormRequestMutation } = reviewsApi;
