import { backendServiceApi } from "../..";
import utils from "@rogwild/next-utils";
import { ISpsLiteBackendSlideOver } from "types/collection-types/sps-lite";
import { slideOverPropulate } from "~utils/api/queries";

const model = `slide-overs`;

export const modalsApi = backendServiceApi.injectEndpoints({
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
        return utils.api.transformResponseItem(
          result
        ) as ISpsLiteBackendSlideOver[];
      },

      providesTags: (result) => {
        return result?.length
          ? [
              ...result.map((props) => ({
                type: `SlideOver`,
                id: props?.id || `LIST`,
              })),
              { type: `SlideOver`, id: `LIST` },
            ]
          : [{ type: `SlideOver`, id: `LIST` }];
      },
    }),
  }),
});

export const { useGetSlideOversQuery } = modalsApi;
