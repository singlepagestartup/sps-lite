import { backendServiceApi } from "../..";
import utils from "@rogwild/next-utils";
const { prepareFormDataToSend } = utils.api;

export const uploaderPopulate = {
  cover: `*`,
  images: `*`,
  category: `*`,
  city: `*`,
  delivery: {
    populate: {
      cover: `*`,
      images: `*`,
      address: {
        populate: {
          phone: `*`,
          city: `*`,
        },
      },
    },
  },
};

const model = `uploaders`;

export const reviewsApi = backendServiceApi.injectEndpoints({
  endpoints: (build) => ({
    createUploader: build.mutation({
      query: (params = {}) => {
        const { populate = uploaderPopulate } = params;
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

    updateUploader: build.mutation({
      query: (params = {}) => {
        const { populate = uploaderPopulate, id } = params;
        const formData = prepareFormDataToSend(params);

        return {
          url: `${model}/${id}`,
          method: `PUT`,
          params: {
            populate,
          },
          body: formData,
        };
      },

      transformResponse: (result) => {
        return utils.api.transformResponseItem(result);
      },

      invalidatesTags: (result) => {
        return [{ type: `Uploader`, id: result.id }];
      },
    }),

    getUploaders: build.query({
      query: (params = {}) => {
        const { populate = uploaderPopulate } = params;

        return {
          url: model,
          params: {
            populate,
          },
        };
      },

      transformResponse: (result) => {
        return utils.api.transformResponseItem(result);
      },

      providesTags: (result) => {
        return result?.length
          ? [
              ...result.map(({ id }: { id: number }) => ({
                type: `Uploader`,
                id,
              })),
              { type: `Uploader`, id: `LIST` },
            ]
          : [{ type: `Uploader`, id: `LIST` }];
      },
    }),
  }),
});

export const {
  useCreateUploaderMutation,
  useGetUploadersQuery,
  useUpdateUploaderMutation,
} = reviewsApi;
