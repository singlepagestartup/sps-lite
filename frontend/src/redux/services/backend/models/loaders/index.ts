import { frontendServiceApi } from "../..";
import { IBackendLoader } from "types/single-types";
import { loaderPopulate } from "~utils/api/queries";
import { transformResponseItem } from "~utils/api/transform-response-item";

const model = "loader";

export const layoutsApi = frontendServiceApi.injectEndpoints({
  endpoints: (build) => ({
    getLoader: build.query({
      query: (params = {}) => {
        const {
          populate = loaderPopulate,
          filters,
          locale,
          pagination = { limit: -1 },
        } = params;

        return {
          url: `${model}.json`,
          params: {
            populate,
            filters,
            locale,
            pagination,
          },
        };
      },

      transformResponse: (result) => {
        return transformResponseItem(result) as IBackendLoader;
      },

      providesTags: (result) => {
        return result?.id
          ? [
              {
                type: "Loader",
                id: result.id,
              },
              { type: "Loader", id: "LIST" },
            ]
          : [{ type: "Loader", id: "LIST" }];
      },
    }),
  }),
});

export const { useGetLoaderQuery } = layoutsApi;
