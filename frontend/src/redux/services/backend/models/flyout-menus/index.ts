import { backendServiceApi } from "../..";
import { IBackendNavbar } from "types/collection-types";
import { pageBlockPopulate } from "~utils/api/queries";
import { transformResponseItem } from "~utils/api/transform-response-item";

const model = "flyout-menus";

export const flyoutMenusApi = backendServiceApi.injectEndpoints({
  endpoints: (build) => ({
    getFlyoutMenuById: build.query({
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
                type: "FlyoutMenu",
                id: result.id,
              },
            ]
          : [];
      },
    }),
  }),
});

export const { useGetFlyoutMenuByIdQuery } = flyoutMenusApi;
