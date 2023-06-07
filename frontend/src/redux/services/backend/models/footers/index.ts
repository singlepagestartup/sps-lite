import { frontendServiceApi } from "../..";
import { IBackendNavbar } from "types/collection-types";
import { pageBlockPopulate } from "~utils/api/queries";
import { transformResponseItem } from "~utils/api/transform-response-item";

const model = "footers";

export const footersApi = frontendServiceApi.injectEndpoints({
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
        return transformResponseItem(result) as IBackendNavbar;
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
