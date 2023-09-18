import { serviceApi } from "../..";
import { IBackendReview } from "types/collection-types";
import { reviewPopulate } from "~utils/api/queries";
import { strapiFind } from "~utils/api/strapi-rtk";

const model = "reviews";
const rtkType = "Review";
const populate = reviewPopulate;

export const reviewsApi = serviceApi.injectEndpoints({
  endpoints: (build) => ({
    getReviews: strapiFind<IBackendReview>({
      serviceApi,
      build,
      populate,
      model,
      rtkType,
    }),
  }),
});

export const { useGetReviewsQuery } = reviewsApi;
