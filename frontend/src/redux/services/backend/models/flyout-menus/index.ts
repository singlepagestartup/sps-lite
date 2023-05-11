import { backendServiceApi } from "../..";
import { IBackendFlyout } from "types/collection-types";
import { pageBlockPopulate } from "~utils/api/queries";
import { transformResponseItem } from "~utils/api/transform-response-item";

const model = "flyouts";

export const flyoutMenusApi = backendServiceApi.injectEndpoints({
  endpoints: (build) => ({
    getFlyoutById: build.query({
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
        return transformResponseItem(result) as IBackendFlyout;
      },

      providesTags: (result) => {
        return result?.id
          ? [
              {
                type: "Flyout",
                id: result.id,
              },
            ]
          : [];
      },
    }),
  }),
});

export const { useGetFlyoutByIdQuery } = flyoutMenusApi;
