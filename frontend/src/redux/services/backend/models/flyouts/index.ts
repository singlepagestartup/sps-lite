import { serviceApi } from "../..";
import { IBackendFlyout } from "types/collection-types";
import { pageBlockPopulate } from "~utils/api/queries";
import { strapiFindOne } from "~utils/api/strapi-rtk";

const model = "flyouts";
const rtkType = "Flyout";
const populate = pageBlockPopulate;

export const flyoutMenusApi = serviceApi.injectEndpoints({
  endpoints: (build) => ({
    getFlyoutById: strapiFindOne<IBackendFlyout>({
      serviceApi,
      build,
      populate,
      model,
      rtkType,
    }),
  }),
});

export const { useGetFlyoutByIdQuery } = flyoutMenusApi;
