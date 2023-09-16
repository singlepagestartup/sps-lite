import { serviceApi } from "../..";
import { IBackendCurrency } from "types/collection-types";
import { currencyPopulate } from "~utils/api/queries";
import { strapiFind } from "~utils/api/strapi-rtk";

const model = "currencies";
const rtkType = "Currency";
const populate = currencyPopulate;

export const categoriesApi = serviceApi.injectEndpoints({
  endpoints: (build) => {
    return {
      getCurrencies: strapiFind<IBackendCurrency>({
        serviceApi,
        build,
        populate,
        model,
        rtkType,
      }),
    };
  },
});

export const { useGetCurrenciesQuery } = categoriesApi;
