import { backendServiceApi } from "../..";
import utils from "@rogwild/next-utils";
import { IBackendNavbar } from "types/collection-types";
import { pageBlockPopulate } from "~utils/api/queries";

const model = "footers";

export const footersApi = backendServiceApi.injectEndpoints({
  endpoints: (build) => ({
    getFooterById: build.query({
      query: (params = {}) => {
        const { populate = pageBlockPopulate, filters, locale, id } = params;

        return {
          url: `${model}/${id}`,
          params: {
            populate,
            filters,
            locale,
          },
        };
      },

      transformResponse: (result) => {
        return utils.api.transformResponseItem(result) as IBackendNavbar;
      },

      providesTags: (result) => {
        return result?.id
          ? [
              {
                type: "Footer",
                id: result.id,
              },
            ]
          : [];
      },
    }),
  }),
});

export const { useGetFooterByIdQuery } = footersApi;
