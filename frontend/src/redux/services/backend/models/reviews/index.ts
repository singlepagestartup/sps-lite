import { backendServiceApi } from "../..";
import { IBackendReview } from "types/collection-types";
import { reviewPopulate } from "~utils/api/queries";
import { transformResponseItem } from "~utils/api/transform-response-item";

const model = "reviews";

export const reviewsApi = backendServiceApi.injectEndpoints({
  endpoints: (build) => ({
    getReviews: build.query({
      query: (params = {}) => {
        const { populate = reviewPopulate } = params;

        return {
          url: model,
          params: {
            populate,
          },
        };
      },

      transformResponse: (result) => {
        return transformResponseItem(
          result
        ) as TransformedApiArray<IBackendReview>;
      },

      providesTags: (result) => {
        return result?.length
          ? [
              ...result.map(({ id }: { id: number }) => ({
                type: "Review",
                id,
              })),
              { type: "Review", id: "LIST" },
            ]
          : [{ type: "Review", id: "LIST" }];
      },
    }),
  }),
});

export const { useGetReviewsQuery } = reviewsApi;
