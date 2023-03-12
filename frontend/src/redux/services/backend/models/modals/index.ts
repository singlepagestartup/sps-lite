import { backendServiceApi } from "../..";
import utils from "@rogwild/next-utils";
import { IModal } from "types";
import { pageBlocksQuery } from "~utils/api/queries";

export const modalPopulate = {
  ...pageBlocksQuery.populate,
};

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
        return utils.api.transformResponseItem(result) as IModal[];
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
