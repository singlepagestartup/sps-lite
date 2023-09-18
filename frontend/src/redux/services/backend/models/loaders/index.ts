import { serviceApi } from "../..";
import { IBackendLoader } from "types/single-types";
import { loaderPopulate } from "~utils/api/queries";
import { strapiFind } from "~utils/api/strapi-rtk";

const model = "loader";
const rtkType = "Loader";
const populate = loaderPopulate;

export const layoutsApi = serviceApi.injectEndpoints({
  endpoints: (build) => ({
    getLoaders: strapiFind<IBackendLoader>({
      serviceApi,
      build,
      populate,
      model,
      rtkType,
    }),
  }),
});

export const { useGetLoadersQuery } = layoutsApi;
