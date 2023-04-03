import { backendServiceApi } from "../..";
import utils from "@rogwild/next-utils";
import { IBackendModal } from "types/collection-types/sps-lite";
import { modalPopulate } from "~utils/api/queries";

const model = `modals`;

export const modalsApi = backendServiceApi.injectEndpoints({
  endpoints: (build) => ({
    getModals: build.query({
      query: (params = {}) => {
        const { populate = modalPopulate } = params;

        return {
          url: model,
          params: {
            populate,
          },
        };
      },

      transformResponse: (result) => {
        return utils.api.transformResponseItem(result) as IBackendModal[];
      },

      providesTags: (result) => {
        return result?.length
          ? [
              ...result.map(({ id }: { id: number }) => ({
                type: `Modal`,
                id,
              })),
              { type: `Modal`, id: `LIST` },
            ]
          : [{ type: `Modal`, id: `LIST` }];
      },
    }),
  }),
});

export const { useGetModalsQuery } = modalsApi;
