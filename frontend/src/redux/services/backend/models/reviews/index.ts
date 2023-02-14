import { backendServiceApi } from "../..";
import utils from "@rogwild/next-utils";
import { IReview } from "types";

export const reviewsPopulate = {
  cover: `*`,
};

const model = `reviews`;

export const reviewsApi = backendServiceApi.injectEndpoints({
  endpoints: (build) => ({
    getReviews: build.query({
      query: (params = {}) => {
        const { populate = reviewsPopulate } = params;

        return {
          url: model,
          params: {
            populate,
          },
        };
      },

      transformResponse: (result) => {
        return utils.api.transformResponseItem(result) as IReview[];
      },

      providesTags: (result) => {
        return result?.length
          ? [
              ...result.map(({ id }: { id: number }) => ({
                type: `Review`,
                id,
              })),
              { type: `Review`, id: `LIST` },
            ]
          : [{ type: `Review`, id: `LIST` }];
      },
    }),
  }),
});

export const { useGetReviewsQuery } = reviewsApi;
