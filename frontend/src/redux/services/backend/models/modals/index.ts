import { backendServiceApi } from "../..";
import { IBackendModal } from "types/collection-types";
import { modalPopulate } from "~utils/api/queries";
import { transformResponseItem } from "~utils/api/transform-response-item";

const model = "modals";

export const modalsApi = backendServiceApi.injectEndpoints({
  endpoints: (build) => ({
    getModals: build.query({
      query: (params = {}) => {
        const { populate = modalPopulate, pagination = { limit: -1 } } = params;

        return {
          url: model,
          params: {
            populate,
            pagination,
          },
        };
      },

      transformResponse: (result) => {
        return transformResponseItem(
          result
        ) as TransformedApiArray<IBackendModal>;
      },

      providesTags: (result) => {
        return result?.length
          ? [
              ...result.map(({ id }: { id: number }) => ({
                type: "Modal",
                id,
              })),
              { type: "Modal", id: "LIST" },
            ]
          : [{ type: "Modal", id: "LIST" }];
      },
    }),
  }),
});

export const { useGetModalsQuery } = modalsApi;
