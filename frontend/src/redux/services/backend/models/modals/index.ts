import { serviceApi } from "../..";
import { IBackendModal } from "types/collection-types";
import { modalPopulate } from "~utils/api/queries";
import { strapiFind } from "~utils/api/strapi-rtk";

const model = "modals";
const rtkType = "Modal";
const populate = modalPopulate;

export const modalsApi = serviceApi.injectEndpoints({
  endpoints: (build) => ({
    getModals: strapiFind<IBackendModal>({
      serviceApi,
      build,
      populate,
      model,
      rtkType,
    }),
  }),
});

export const { useGetModalsQuery } = modalsApi;
