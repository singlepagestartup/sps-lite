import { frontendServiceApi } from "../..";
import { ISpsLiteBackendSlideOver } from "types/collection-types/sps-lite";
import { slideOverPropulate } from "~utils/api/queries";
import { transformResponseItem } from "~utils/api/transform-response-item";

const model = "slide-overs";

export const modalsApi = frontendServiceApi.injectEndpoints({
  endpoints: (build) => ({
    getSlideOvers: build.query({
      query: (params = {}) => {
        const { populate = slideOverPropulate } = params;

        return {
          url: model,
          params: {
            populate,
          },
        };
      },

      transformResponse: (result) => {
        return transformResponseItem(
          result,
        ) as TransformedApiArray<ISpsLiteBackendSlideOver>;
      },

      providesTags: (result) => {
        return result?.length
          ? [
              ...result.map((props) => ({
                type: "SlideOver",
                id: props?.id || "LIST",
              })),
              { type: "SlideOver", id: "LIST" },
            ]
          : [{ type: "SlideOver", id: "LIST" }];
      },
    }),
  }),
});

export const { useGetSlideOversQuery } = modalsApi;
