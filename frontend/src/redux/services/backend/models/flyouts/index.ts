import { serviceApi } from "../..";
import { IBackendFlyout } from "types/collection-types";
import { pageBlockPopulate } from "~utils/api/queries";
import {
  strapiCreate,
  strapiDelete,
  strapiFind,
  strapiFindOne,
  strapiUpdate,
} from "~utils/api/strapi-rtk";

const model = "flyouts";
const rtkType = "Flyout";
const populate = pageBlockPopulate;

export const flyoutMenusApi = serviceApi.injectEndpoints({
  endpoints: (build) => ({
    getFlyouts: strapiFind<IBackendFlyout>({
      serviceApi,
      build,
      populate,
      model,
      rtkType,
    }),

    getFlyoutById: strapiFindOne<IBackendFlyout>({
      serviceApi,
      build,
      populate,
      model,
      rtkType,
    }),

    createFlyout: strapiCreate<IBackendFlyout>({
      serviceApi,
      build,
      populate,
      model,
      rtkType,
    }),

    updateFlyout: strapiUpdate<IBackendFlyout>({
      serviceApi,
      build,
      populate,
      model,
      rtkType,
    }),

    deleteFlyout: strapiDelete<IBackendFlyout>({
      serviceApi,
      build,
      populate,
      model,
      rtkType,
    }),
  }),
});

export const {
  useGetFlyoutsQuery,
  useLazyGetFlyoutByIdQuery,
  useCreateFlyoutMutation,
  useUpdateFlyoutMutation,
  useDeleteFlyoutMutation,
} = flyoutMenusApi;
