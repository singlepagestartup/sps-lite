import { serviceApi } from "../..";
import { IBackendLayout } from "types/collection-types";
import { layoutPopulate } from "~utils/api/queries";
import { strapiFind } from "~utils/api/strapi-rtk";

const model = "layouts";
const rtkType = "Layout";
const populate = layoutPopulate;

export const layoutsApi = serviceApi.injectEndpoints({
  endpoints: (build) => ({
    getLayouts: strapiFind<IBackendLayout>({
      serviceApi,
      build,
      populate,
      model,
      rtkType,
    }),
  }),
});

export const { useGetLayoutsQuery } = layoutsApi;
